import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth'; // Assuming you have a custom hook for authentication

const AuthGuard = ({ children }) => {
   const { isAuthenticated } = useAuth(); // Use a custom hook or context to check authentication

   if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      return <Navigate to="/login" />;
   }

   // If authenticated, render the children components
   return children;
};

export default AuthGuard;
