import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const userString = localStorage.getItem("currentUser");
  const user = JSON.parse(userString);
  return user && user.uid ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
