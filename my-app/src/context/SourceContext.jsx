// src/context/AuthContext.js

import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// Create a separate hook for consuming the context
export const useAuth = () => React.useContext(AuthContext);

// The actual provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //const navigate = useNavigate();

  // Simulate user authentication (this can be replaced with an API call)
  useEffect(() => {
    // Check if the user is authenticated in local storage or through a token
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set the user state based on localStorage
    }
  }, []);

  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
    //navigate("/dashboard"); // Redirect after login
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user"); // Clear user data from localStorage
    //navigate("/login"); // Redirect to login page after logout
  }, []);

  const authValue = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};