import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.tsx'

// Build-time only: scripts/prerender.mjs renders every route in prerenderRoutes into dist/<route>/index.html
export { prerenderRoutes } from './lib/seoTemplates';
export function render(url: string) {
  return renderToString(<StaticRouter location={url}><App /></StaticRouter>);
}
