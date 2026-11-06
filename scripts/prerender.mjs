// Bakes every static route into dist/<route>/index.html with its own head tags, and writes dist/sitemap.xml from the same list.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const { render, prerenderRoutes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);

const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const swap = (html, re, value, what) => {
  if (!re.test(html)) throw new Error(`prerender: ${what} not found in template`);
  return html.replace(re, value);
};

// The template head belongs to the homepage; other routes get their own title, description, canonical, OG URL and JSON-LD
function withHead(html, meta) {
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${attr(meta.title)}</title>`, 'title');
  html = swap(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${attr(meta.description)}" />`, 'description');
  html = swap(html, /<meta name="keywords" content="[^"]*" \/>/, `<meta name="keywords" content="${attr(meta.keywords)}" />`, 'keywords');
  html = swap(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${meta.canonical}" />`, 'canonical');
  html = swap(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${attr(meta.title)}" />`, 'og:title');
  html = swap(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${attr(meta.description)}" />`, 'og:description');
  html = swap(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${meta.canonical}" />`, 'og:url');
  const json = JSON.stringify(meta.structuredData).replace(/</g, '\\u003c');
  html = swap(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${json}</script>`, 'JSON-LD');
  return html;
}

for (const route of prerenderRoutes) {
  const head = route.meta ? withHead(template, route.meta) : template;
  const html = head.replace(marker, `<div id="root">${render(route.path)}</div>`);
  const dir = path.join(dist, route.path);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html);
  console.log(`prerender: ${route.path}`);
}

const urls = prerenderRoutes.map((r) => `  <url>
    <loc>https://drawnonward.org${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`);
await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`sitemap: ${prerenderRoutes.length} URLs`);
await rm(ssrDir, { recursive: true, force: true });
