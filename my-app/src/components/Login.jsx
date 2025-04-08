// src/components/Login.js

import React, { useState } from "react";
import { useAuth } from '../components/auth/authContext'
import { ToastContainer, toast } from 'react-toastify';
import { showToast } from "../middlewares/toast";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    debugger;
    // For simplicity, we'll check if the username is "admin" and password is "password"
    if (username === "admin" || username === "IT" && password === "password") {
      //login(); 
      login(username);
      showToast.successWithDetails(
        'Authenticated', 
        'Your session has logged in.'
        
      );
      //login();
      navigate('/dashboard');
      //alert("success credentials");// Simulate login with role
      console.log(username,password)
    } else {
      //alert("Invalid credentials");
      showToast.errorWithDetails(
        'Connection Failed', 
        'Unable to connect to the server. Please check your internet connection.'
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
    
  );
};

export default Login;
