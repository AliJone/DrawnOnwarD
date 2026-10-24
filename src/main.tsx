import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;
const app = <BrowserRouter><App /></BrowserRouter>;
// The production build ships prerendered markup (scripts/prerender.mjs); the dev server does not
if (root.hasChildNodes()) hydrateRoot(root, app); else createRoot(root).render(app);
