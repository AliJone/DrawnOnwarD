import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceDetailPage from "./components/ServiceDetailPage";
import AboutPage from "./pages/AboutPage";
import PolicyPage from "./pages/PolicyPage";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

// Only the toaster is used (contact form); the query client, Sonner and tooltip providers had no consumers
const App = () => (
  <>
    <Toaster />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PolicyPage kind="privacy" />} />
      <Route path="/terms" element={<PolicyPage kind="terms" />} />
      <Route path="/guides/:slug" element={<ArticlePage kind="guide" />} />
      <Route path="/work/:slug" element={<ArticlePage kind="work" />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
