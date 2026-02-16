import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AuthorizedLayout from "./layouts/AuthorizedLayout";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import TendersPage from "./pages/TendersPage";
import PredictPage from "./pages/PredictPage";
import OrgFavoritesPage from "./pages/OrgFavoritesPage";
import CertFavoritesPage from "./pages/CertFavoritesPage";
import NotifiesPage from "./pages/NotifiesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              
              {/* Authorized routes */}
              <Route element={<AuthorizedLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/tenders" element={<TendersPage />} />
                <Route path="/predict" element={<PredictPage />} />
                <Route path="/org-favorites" element={<OrgFavoritesPage />} />
                <Route path="/cert-favorites" element={<CertFavoritesPage />} />
                <Route path="/notifies" element={<NotifiesPage />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
