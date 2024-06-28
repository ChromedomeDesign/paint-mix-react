import React, { useState, useMemo } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export default function ThemeRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useMemo(() => {
//     const token = localStorage.getItem("accessToken");
//     const userType = localStorage.getItem("userType");
//     setIsAuthenticated(!!token);
//     setUserType(userType || "");
//   }, []);

  let routes = [];
   routes = isAuthenticated? PrivateRoute : PublicRoute;

  return useRoutes([
    ...routes,
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}