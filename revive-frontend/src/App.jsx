import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import EnterpriseSignUp from "./pages/EnterpriseSignUp/EnterpriseSignUp";
import IndividualSignUp from "./pages/IndividualSignUp/IndividualSignUp";
import EnterpriseDashboard from "./pages/EnterpriseDashboard/EnterpriseDashboard";
import IndividualDashboard from "./pages/IndividualDashboard/IndividualDashboard";
function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sign-up" element={<SignUpPage/>} />
        <Route exact path="/sign-up/individuals" element={<IndividualSignUp/>} />
        <Route exact path="/sign-up/enterprises" element={<EnterpriseSignUp/>} />
        <Route exact path="/dashboard/individuals" element={<IndividualDashboard/>} />
        <Route exact path="/dashboard/enterprises" element={<EnterpriseDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
