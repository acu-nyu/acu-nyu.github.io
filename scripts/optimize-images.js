#!/usr/bin/env node

/**
 * Batch-optimize source images for faster Gatsby builds and deploys.
 *
 * Uses sharp (already a Gatsby dependency) to:
 *   - Resize images to max 1200px on the longest edge
 *   - Compress JPEGs to quality 80 (progressive)
 *   - Compress PNGs with effort level 4
 *
 * Run: node scripts/optimize-images.js
 * Add --dry-run to preview without writing.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');
const MAX_DIMENSION = 1200;
const JPEG_QUALITY = 80;
const SIZE_THRESHOLD = 200 * 1024; // Only optimize files > 200KB

const dryRun = process.argv.includes('--dry-run');

function getFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeImage(filePath) {
  const stat = fs.statSync(filePath);
  if (stat.size < SIZE_THRESHOLD) return null;

  const ext = path.extname(filePath).toLowerCase();
  const metadata = await sharp(filePath).metadata();
  const { width, height } = metadata;

  const needsResize = width > MAX_DIMENSION || height > MAX_DIMENSION;

  let pipeline = sharp(filePath);

  if (needsResize) {
    pipeline = pipeline.resize(MAX_DIMENSION, MAX_DIMENSION, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ effort: 4 });
  }

  const buffer = await pipeline.toBuffer();
  const savedBytes = stat.size - buffer.length;
  const savedPct = ((savedBytes / stat.size) * 100).toFixed(1);
  const rel = path.relative(IMAGE_DIR, filePath);

  if (savedBytes <= 0) return null;

  if (!dryRun) {
    fs.writeFileSync(filePath, buffer);
  }

  return {
    file: rel,
    before: (stat.size / 1024).toFixed(0),
    after: (buffer.length / 1024).toFixed(0),
    saved: savedPct,
    dims: needsResize
      ? `${width}x${height} → ${Math.min(width, MAX_DIMENSION)}x${Math.min(height, MAX_DIMENSION)}`
      : `${width}x${height}`,
  };
}

async function main() {
  const files = getFiles(IMAGE_DIR);
  console.log(`Found ${files.length} images. ${dryRun ? '(DRY RUN)' : ''}\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let optimized = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    if (result) {
      optimized++;
      totalBefore += parseInt(result.before);
      totalAfter += parseInt(result.after);
      console.log(
        `  ${result.file}: ${result.before}KB → ${result.after}KB (-${result.saved}%) [${result.dims}]`
      );
    }
  }

  console.log(`\n${optimized}/${files.length} images optimized.`);
  if (optimized > 0) {
    console.log(
      `Total: ${(totalBefore / 1024).toFixed(1)}MB → ${(totalAfter / 1024).toFixed(1)}MB (saved ${((totalBefore - totalAfter) / 1024).toFixed(1)}MB)`
    );
  }
}

main().catch(console.error);
