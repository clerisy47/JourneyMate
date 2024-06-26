import React, { createContext, useState } from 'react';
import { login as loginUtil } from '../utils/authUtils';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleApiRequest = async (url, method, body) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch');
      }
      return data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await handleApiRequest(
        'http://localhost:5000/signup', // Replace with your backend endpoint
        'POST',
        { name, email, password }
      );
      setIsAuthenticated(true); // Update authentication state upon successful signup
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to signup. Please try again.'); // Display error to user
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const result = await loginUtil(email, password);
      if (result.success) {
        setIsAuthenticated(true);
      } else {
        alert(result.message);
      }
      return result.success;
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
