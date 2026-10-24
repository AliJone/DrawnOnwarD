// Bakes the rendered homepage into dist/index.html so crawlers that do not run JS still see the content.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrDir = path.join(root, 'dist-ssr');
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const file = path.join(root, 'dist', 'index.html');
const template = await readFile(file, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);
await writeFile(file, template.replace(marker, `<div id="root">${render('/')}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log('prerender: dist/index.html');
