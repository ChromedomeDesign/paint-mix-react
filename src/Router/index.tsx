// import React, { useEffect, useState } from "react";
// import { useRoutes, Navigate } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

// const ThemeRoutes: React.FC = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === 'true';
//     setIsAuthenticated(isLoggedIn);
// }, []);

//   let routes = isAuthenticated? PrivateRoute : PublicRoute;

//   console.log("routes", routes);

//   return useRoutes([
//    ...routes,
//     { path: "*", element: <Navigate to="/" replace /> },
//   ]);
// };

// export default ThemeRoutes;
import React, { useEffect, useState, createContext, useContext, FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const ThemeRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  const signIn = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const routes = isAuthenticated ? PrivateRoute : PublicRoute;

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {useRoutes([
        ...routes,
        { path: "*", element: <Navigate to="/" replace /> },
      ])}
    </AuthContext.Provider>
  );
};

export default ThemeRoutes;
export { AuthContext };
