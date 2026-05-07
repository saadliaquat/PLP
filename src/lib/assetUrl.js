/** Static asset path with optional subpath prefix (GitHub Pages project sites). */
export function assetUrl(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
