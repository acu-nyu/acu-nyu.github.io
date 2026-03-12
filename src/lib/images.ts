// Image helper: replaces Gatsby's GraphQL image pipeline
// Uses import.meta.glob to statically resolve all images at build time

const allImages = import.meta.glob<{ default: string }>(
  '../assets/images/**/*.{jpg,jpeg,png,webp,gif,PNG,JPG,JPEG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);

const allImgAssets = import.meta.glob<{ default: string }>(
  '../assets/img/**/*.{jpg,jpeg,png,webp,gif,PNG,JPG,JPEG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);

/**
 * Get a resolved URL for an image by its relative path.
 * Searches both src/assets/images/ and src/assets/img/.
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

  return undefined;
}
