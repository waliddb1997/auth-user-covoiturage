import React from "react";
import { useSelector } from "react-redux";
import { Navigate, navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRouteA = () => {
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);
  {
    isAuth && user.Role == "admin" ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default PrivateRouteA;

// const PrivateRoute = (props) => {
//     if (localStorage.getItem("role") == "admin") {
//       return <>{props.children}</>;
//     } else {
//     return <Navigate to="/" />;

//     }
//   };
