// Image helper: replaces Gatsby's GraphQL image pipeline
// Uses import.meta.glob to statically resolve all images at build time

const allImages = import.meta.glob<string>(
  '../assets/images/**/*.{jpg,jpeg,png,webp,gif,PNG,JPG,JPEG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);

const allImgAssets = import.meta.glob<string>(
  '../assets/img/**/*.{jpg,jpeg,png,webp,gif,PNG,JPG,JPEG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);

/**
 * Get a resolved URL for an image by its relative path.
 * Searches both src/assets/images/ and src/assets/img/.
 *
 * Emits a build-time console warning when the path cannot be resolved so
 * broken image references are caught during `npm run build` rather than
 * silently rendering a missing image at runtime.  The most common cause is
 * a filename case mismatch (works on macOS, breaks on Linux/CI).
 *
 * @param relativePath - e.g. 'e-board/tyler.jpg', 'events/event_f25_winter.png', 'logo.png'
 * @returns resolved URL string or undefined
 */
export function getImageUrl(relativePath: string): string | undefined {
  // Search in images/ first
  const imagesKey = Object.keys(allImages).find(
    (k) => k.endsWith('/' + relativePath) || k.endsWith(relativePath)
  );
  if (imagesKey) return allImages[imagesKey];

  // Fall back to img/
  const imgKey = Object.keys(allImgAssets).find(
    (k) => k.endsWith('/' + relativePath) || k.endsWith(relativePath)
  );
  if (imgKey) return allImgAssets[imgKey];

  // Warn at build time so missing images don't silently slip through to production.
  // Check for filename case mismatches (common macOS → Linux CI breakage).
  const lowerPath = relativePath.toLowerCase();
  const caseMatch =
    Object.keys(allImages).find((k) =>
      k.toLowerCase().endsWith('/' + lowerPath)
    ) ??
    Object.keys(allImgAssets).find((k) =>
      k.toLowerCase().endsWith('/' + lowerPath)
    );

  if (caseMatch) {
    console.warn(
      `[images] Case mismatch for "${relativePath}" — found "${caseMatch}". ` +
        `Rename the file or update the data entry to fix this on Linux/CI.`
    );
  } else {
    console.warn(
      `[images] Could not resolve image: "${relativePath}". ` +
        `Verify the file exists in src/assets/images/ and the path is correct.`
    );
  }

  return undefined;
}
