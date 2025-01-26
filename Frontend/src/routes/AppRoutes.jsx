import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { Dashboard } from "../components/dashboard";
import ProtectedRouteWrapper from "./protectedRouteWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRouteWrapper>
        <Dashboard />
      </ProtectedRouteWrapper>
    ),
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
