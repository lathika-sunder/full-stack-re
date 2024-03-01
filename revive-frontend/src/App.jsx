import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import EnterpriseSignUp from "./pages/EnterpriseSignUp/EnterpriseSignUp";
import IndividualSignUp from "./pages/IndividualSignUp/IndividualSignUp";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import EnterpriseDashboard from "./pages/EnterpriseDashboard/EnterpriseDashboard";
import IndividualDashboard from "./pages/IndividualDashboard/IndividualDashboard";
import LoginPage from "./pages/LoginPage/LoginPage";
import Preloader from "./components/PreLoaderComp/PreloaderComp";
import ErrorComp from "./components/ErrorComp/ErrorComp";
import SchedulePickup from "./pages/SchedulePickup/SchedulePickup";
import IndividualsSaleHistoryPage from "./pages/IndividualsSaleHistory/IndividualsSaleHistoryPage";
import ScrapDealersHome from "./pages/ScrapDealersHome/ScrapDealersHome";
import ScrapDealersDashboard from "./pages/ScrapDealersDashboard/ScrapDealersDashboard";
import '../src/components/RecyclePlantsComponent/RecyclePlantsComponent'
import RecyclePlantsComponent from "../src/components/RecyclePlantsComponent/RecyclePlantsComponent";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrapDealerRoute, setIsScrapDealerRoute] = useState(false);
 

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    setIsLoading(true);
    return () => clearTimeout(timer);
  }, [window.location.pathname]);

  useEffect(() => {
    
    setIsScrapDealerRoute(
      window.location.pathname === "/scrap-dealers" 
    );
  }, [window.location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {!isScrapDealerRoute && <NavbarComp />}
        {isLoading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/sign-up" element={<SignUpPage />} />
            <Route
              exact
              path="/recycle-plants"
              element={<RecyclePlantsComponent/>}
            />
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
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/dashboard" element={<ErrorComp />} />
            <Route exact path="*" element={<ErrorComp />} />
            <Route
              exact
              path="/sell-waste/individual"
              element={<SchedulePickup />}
            />
            <Route
              exact
              path="/request-history/individual"
              element={<IndividualsSaleHistoryPage />}
            />
            <Route
              exact
              path="/scrap-dealers"
              element={<ScrapDealersHome />}
            />
            <Route
              exact
              path="/dashboard/scrap-dealers"
              element={<ScrapDealersDashboard />}
            />
          </Routes>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
