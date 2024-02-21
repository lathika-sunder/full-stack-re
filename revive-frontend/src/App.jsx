import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import EnterpriseSignUp from "./pages/EnterpriseSignUp/EnterpriseSignUp";
import IndividualSignUp from "./pages/IndividualSignUp/IndividualSignUp";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import EnterpriseDashboard from "./pages/EnterpriseDashboard/EnterpriseDashboard";
import IndividualDashboard from "./pages/IndividualDashboard/IndividualDashboard";
import LoginPage from "./pages/LoginPage/LoginPage";
import Preloader from "./components/PreLoaderComp/PreloaderComp";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    setIsLoading(true)
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavbarComp />
        {isLoading ? (
         <Preloader/>
        ) : (
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/sign-up" element={<SignUpPage />} />
            <Route
              exact
              path="/sign-up/individuals"
              element={<IndividualSignUp />}
            />
            <Route
              exact
              path="/sign-up/enterprises"
              element={<EnterpriseSignUp />}
            />
            <Route
              exact
              path="/dashboard/individuals"
              element={<IndividualDashboard />}
            />
            <Route
              exact
              path="/dashboard/enterprises"
              element={<EnterpriseDashboard />}
            />
            <Route
              exact
              path="/login"
              element={<LoginPage />}
            />
          </Routes>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
