import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Chooser from "./pages/Chooser.tsx";
import V1DarkTech from "./pages/V1DarkTech.tsx";
import V2Editorial from "./pages/V2Editorial.tsx";
import V3Brutal from "./pages/V3Brutal.tsx";
import V4Organic from "./pages/V4Organic.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chooser />} />
          <Route path="/v1" element={<V1DarkTech />} />
          <Route path="/v2" element={<V2Editorial />} />
          <Route path="/v3" element={<V3Brutal />} />
          <Route path="/v4" element={<V4Organic />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
