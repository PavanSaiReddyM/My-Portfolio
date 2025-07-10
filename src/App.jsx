import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages";
import NotFound from "./pages/NotFound";

// Optional: Add UI Providers here if needed
// Example: Toaster, TooltipProvider, QueryClientProvider, etc.

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};



export default App;
