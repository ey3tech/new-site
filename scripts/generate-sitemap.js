const fs = require('fs');
const matter = require('gray-matter');

const SITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

function urlEntry(route) {
  if (!SITE_URL) {
    throw new Error(
      'NEXT_PUBLIC_WEBSITE_URL is not set; refusing to emit a sitemap with undefined loc values.'
    );
  }

  // Normalize so every loc ends with a single trailing slash, matching
  // `trailingSlash: true` in next.config.js.
  const normalized = route.endsWith('/') ? route : `${route}/`;

  return `  <url>
    <loc>${`${SITE_URL}${normalized}`}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
}

function addPage(page) {
  const path = page
    .replace('src/pages', '')
    .replace('.page.js', '')
    .replace('.page.mdx', '')
    .replace('/index', '/');
  const route = path === '/index' ? '' : path;

  // Exclude 404 page and generated `[]` pages
  if (route.includes('[') || route.includes('404')) return;

  return urlEntry(route);
}

function addPost(post) {
  const source = fs.readFileSync(post, 'utf-8');
  const { data: frontmatter } = matter(source);

  if (process.env.NODE_ENV === 'production' && frontmatter.draft) return;

  const route = post.replace('src/posts', '/press').replace('.mdx', '');

  return urlEntry(route);
}

function addJob(job) {
  // Drafts can be detected per-job via frontmatter in the future; for now
  // every mdx file under src/careers is included.
  const route = job.replace('src/careers', '/careers').replace('.mdx', '');

  return urlEntry(route);
}

async function generateSitemap() {
  const { globby } = await import('globby');
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'src/pages/**/*{.page.js,.page.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api',
  ]);
  const postUrls = await globby(['src/posts/**/*.mdx']);
  const jobUrls = await globby(['src/careers/*.mdx']);
  const posts = postUrls.map(addPost);
  const jobs = jobUrls.map(addJob);

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).filter(Boolean).join('\n')}
${posts.filter(Boolean).join('\n')}
${jobs.filter(Boolean).join('\n')}
</urlset>\n`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
