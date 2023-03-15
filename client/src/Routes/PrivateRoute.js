import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const PrivateRoute = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
