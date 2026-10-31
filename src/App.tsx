import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Only the toaster is used (contact form); the query client, Sonner and tooltip providers had no consumers
const App = () => (
  <>
    <Toaster />
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
