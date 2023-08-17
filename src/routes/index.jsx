import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoardPage } from "../pages/DashboardPage";
import { Page404 } from "../pages/Page404";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
