// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(''); // To store user type (volunteer, admin, etc.)

  const login = (userType) => {
    setIsLoggedIn(true);
    setUserType(userType); // Update user type after login
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
