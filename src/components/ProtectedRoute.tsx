import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../main";

const ProtectedRoute: React.FC = () => {
  const auth = useContext(AuthContext);
  return auth.isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
