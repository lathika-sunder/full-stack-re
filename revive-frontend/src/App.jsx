import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
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

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavbarComp />
        {isLoading ? (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <CircularProgress color="success"/>
          </div>
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
