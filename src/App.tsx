
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import RealityCheck from "./components/RealityCheck";
import ActionRoadmap from "./components/ActionRoadmap";
import CreativeQuest from "./components/CreativeQuest";
import SelfReport from "./pages/SelfReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/reality-check" element={<RealityCheck />} />
          <Route path="/action-roadmap" element={<ActionRoadmap />} />
          <Route path="/creative-quest" element={<CreativeQuest />} />
          <Route path="/self-report" element={<SelfReport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
