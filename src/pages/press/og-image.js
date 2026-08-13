import { generateOgImage as renderOgImage } from 'utils/ogImage';

/**
 * Render an OG image for a press article.
 * Accepts the same shape as the original per-page generator.
 */
export default async function buildPressOgImage(props) {
  return renderOgImage({
    templatePath: 'src/pages/press/og-image.html',
    params: props,
  });
}

// Re-export under the legacy name so existing imports keep working.
export { buildPressOgImage as generateOgImage };