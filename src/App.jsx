import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastBar } from "react-hot-toast";
import './i18n'
import MieterHome from "./Mieter/MieterHome";
import VermieterHome from "./Vermeiter/VermieterHome";

const queryClient = new QueryClient();
export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mieter" element={<MieterHome />} />
          <Route path="/vermieter" element={<VermieterHome />} />
          {/* <Route element path="">
            <Route element path="/:id" />
          </Route> */}
        </Routes>
      </QueryClientProvider>
      {/* <ToastBar
  style={{
    background: '#fef3c7', // لون خلفية كريمي خفيف
    color: '#92400e',       // لون نص بني برونزي واضح
    padding: '0.75rem 1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontWeight: '500',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }}
/> */}
    </BrowserRouter>
  );
}