import { generateOgImage as renderOgImage } from 'utils/ogImage';

/**
 * Render an OG image for a careers listing.
 * Accepts the same shape as the original per-page generator.
 */
export default async function buildCareersOgImage(props) {
  return renderOgImage({
    templatePath: 'src/pages/careers/og-image.html',
    params: props,
  });
}

// Re-export under the legacy name so existing imports keep working.
export { buildCareersOgImage as generateOgImage };