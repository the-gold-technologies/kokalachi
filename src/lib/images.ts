// Trip photos in the CMS are mostly Unsplash links sized for trip cards (w=800). Where a photo is
// shown much wider (a full-screen hero), stretching that 800px image makes it look soft, so ask
// Unsplash for the size actually needed: it serves any width from the same photo.
// Other images (e.g. Cloudinary uploads) are already full size and are left as they are.

function isUnsplash(url: URL) {
  return url.hostname === "images.unsplash.com";
}

// The same photo at `width` pixels wide (Unsplash only; anything else is returned unchanged)
export function sizedImage(src: string, width: number): string {
  try {
    const url = new URL(src);
    if (!isUnsplash(url)) return src;
    url.searchParams.set("w", String(width));
    return url.toString();
  } catch {
    return src;
  }
}

// srcSet so phones download a smaller version and large / high-resolution screens a sharp one
export function imageSrcSet(src: string, widths: number[]): string | undefined {
  try {
    if (!isUnsplash(new URL(src))) return undefined;
  } catch {
    return undefined;
  }
  return widths.map((w) => `${sizedImage(src, w)} ${w}w`).join(", ");
}
