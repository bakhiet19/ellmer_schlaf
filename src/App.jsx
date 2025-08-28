import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastBar, Toaster } from "react-hot-toast";
import './i18n'
import MieterHome from "./Mieter/MieterHome";
import VermieterHome from "./Vermeiter/VermieterHome";
import WohnungHome from "./WohnongDetails/WohnungHome";
import NotFound from "./Pages/NotFound";
import { Filter } from "./Hooks/FilterContext";

const queryClient = new QueryClient();
export default function App() {
  return (
   <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <Filter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#f0f9ff",
            color: "#0c4a6e",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.75rem",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            fontWeight: "500",
            fontSize: "0.95rem",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mieter" element={<MieterHome />} />
        <Route path="/vermieter" element={<VermieterHome />} />
        <Route path="/details" element={<WohnungHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Filter>
  </QueryClientProvider>
</BrowserRouter>

  );
}