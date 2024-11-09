import { useEffect, useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

const SecureRoutes = ({ children }) => {
  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("accessToken");
      try {
        const decodedToken = token;
        if (decodedToken) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>{isAuthenticated ? <Outlet /> : <Navigate to="/login"></Navigate>}</>
  );
};

export default SecureRoutes;
