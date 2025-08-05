import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

// إنشاء الـ QueryClient بشكل صحيح
const queryClient = new QueryClient();

// مكون تجريبي لعرضه في الصفحة الرئيسية


export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}