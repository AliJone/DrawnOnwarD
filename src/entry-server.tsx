import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.tsx'

// Build-time only: scripts/prerender.mjs renders the homepage into dist/index.html
export function render(url: string) {
  return renderToString(<StaticRouter location={url}><App /></StaticRouter>);
}
