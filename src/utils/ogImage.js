const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const { createHash } = require('crypto');

/**
 * Render a local og-image.html template via Puppeteer and cache the
 * resulting PNG under public/og keyed by the template URL hash.
 *
 * @param {object} options
 * @param {string} options.templatePath - Path to the HTML template, relative
 *   to the project root (e.g. "src/pages/careers/og-image.html").
 * @param {Record<string, string>} options.params - Query string params to
 *   expose to the template's inline script.
 */
export async function generateOgImage({ templatePath, params }) {
  const search = new URLSearchParams(params);
  const url = `file:${path.join(process.cwd(), `${templatePath}?${search}`)}`;

  const hash = createHash('md5').update(url).digest('hex');
  const ogImageDir = path.join(process.cwd(), 'public/og');
  const imageName = `${hash}.png`;
  const imagePath = path.join(ogImageDir, imageName);
  const publicPath = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og/${imageName}`;

  try {
    fs.statSync(imagePath);
    return publicPath;
  } catch {
    // Cache miss — render below.
  }

  // puppeteer.executablePath() returns a Promise starting with puppeteer 22.
  const executablePath = await puppeteer.executablePath();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
    executablePath,
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    const buffer = await page.screenshot();

    fs.mkdirSync(ogImageDir, { recursive: true });
    fs.writeFileSync(imagePath, buffer);

    return publicPath;
  } finally {
    await browser.close();
  }
}