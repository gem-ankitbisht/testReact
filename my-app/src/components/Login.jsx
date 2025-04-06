// src/components/Login.js

import React, { useState } from "react";
import { useAuth } from "../context/SourceContext";
import { ToastContainer, toast } from 'react-toastify';
import { showToast } from "../middlewares/toast";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();


  const handleLogin = (e) => {
    e.preventDefault();
    
    // For simplicity, we'll check if the username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
      login({ username: "admin", role: "admin" }); 
      showToast.successWithDetails(
        'Authenticated', 
        'Your session has logged in.'
      );
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
