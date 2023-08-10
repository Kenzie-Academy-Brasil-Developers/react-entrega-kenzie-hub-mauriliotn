import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoardPage } from "../pages/DashboardPage";
import { Page404 } from "../pages/Page404";
import { useState } from "react";

export const RoutesMain = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashBoardPage user={user} userLogout={userLogout} />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
