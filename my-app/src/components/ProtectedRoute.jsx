// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/SourceContext';

const ProtectedRoute = ({ element, requiredRole, ...rest }) => {
  const { user } = useAuth();
  console.log(user,"user")

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  console.log(requiredRole,user.role)

  // If the user's role does not match the required role, redirect to login
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // If everything passes, render the passed `element`
  return element;
};

export default ProtectedRoute;
