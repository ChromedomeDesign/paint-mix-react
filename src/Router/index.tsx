import React, { useState } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const ThemeRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  let routes = isAuthenticated? PrivateRoute : PublicRoute;

  console.log("routes", routes);

  return useRoutes([
   ...routes,
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

export default ThemeRoutes;
