import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import ProtectedRouteWrapper from "./ProtectedRouteWrapper";
import Navbar from "../components/Navbar";
import LoanCategories from "../pages/LoanCategories";
import LoanCalculator from "../pages/LoanCalculator";
import LoanApplicationPage from "../pages/LoanApplicationPage";
import UserDashboard from "../pages/UserDashboard";
import AdminPanel from "../pages/AdminPanel";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteWrapper>
              <Navbar />
              <Home />
            </ProtectedRouteWrapper>
          }
        />
        <Route
          path="/loan-categories"
          element={
            <ProtectedRouteWrapper>
              <Navbar />
              <LoanCategories />
            </ProtectedRouteWrapper>
          }
        />
        <Route
          path="/loan-calculator"
          element={
            <ProtectedRouteWrapper>
              <Navbar />
              <LoanCalculator />
            </ProtectedRouteWrapper>
          }
        />
        <Route
          path="/loan-application"
          element={
            <ProtectedRouteWrapper>
              <Navbar />
              <LoanApplicationPage />
            </ProtectedRouteWrapper>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRouteWrapper>
              <Navbar />
              <UserDashboard />
            </ProtectedRouteWrapper>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRouteWrapper>
              <Navbar />
              <AdminPanel />
            </ProtectedRouteWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
