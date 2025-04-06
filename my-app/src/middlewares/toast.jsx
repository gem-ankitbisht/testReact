// src/utils/toast.js
import { toast } from 'react-toastify';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

// Custom toast options with specific styles
const defaultOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

// Custom component for toast with title and description
const ToastWithDetails = ({ title, description }) => (
  <div>
    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{title}</div>
    {description && <div style={{ fontSize: '0.9em' }}>{description}</div>}
  </div>
);

// Create custom CSS for toast styling
const createToastStyles = () => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
    /* Lighter backgrounds with contrasting progress bars */
    .Toastify__toast--success {
      background-color: #e6f7ed !important;
    }
    .Toastify__toast--success .Toastify__progress-bar {
      background-color: #4caf50 !important;
    }
    
    .Toastify__toast--error {
      background-color: #fde8e8 !important;
      color: black !important;
    }
    .Toastify__toast--error .Toastify__progress-bar {
      background-color: #f44336 !important;
    }
    
    .Toastify__toast--warning {
      background-color: #fff8e6 !important;
      color: black !important;
    }
    .Toastify__toast--warning .Toastify__progress-bar {
      background-color: #ff9800 !important;
    }
    
    .Toastify__toast--info {
      background-color: #e6f2ff !important;
      color: black !important;
    }
    .Toastify__toast--info .Toastify__progress-bar {
      background-color: #2196f3 !important;
    }
    
    /* General styling improvements */
    .Toastify__toast {
      border-radius: 8px !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    }
    
    .Toastify__progress-bar {
      height: 3px !important;
    }
  `;
  document.head.appendChild(style);
};

// Call this function once when your app initializes
if (typeof window !== 'undefined') {
  createToastStyles();
}

export const showToast = {
  // Success notifications
  success: (message) => toast.success(message, defaultOptions),
  successWithDetails: (title, description) => toast.success(
    <ToastWithDetails title={title} description={description} />,
    defaultOptions
  ),
  
  // Warning notifications
  warning: (message) => toast.warn(message, defaultOptions),
  warningWithDetails: (title, description) => toast.warn(
    <ToastWithDetails title={title} description={description} />,
    defaultOptions
  ),
  
  // Error notifications
  error: (message) => toast.error(message, defaultOptions),
  errorWithDetails: (title, description) => toast.error(
    <ToastWithDetails title={title} description={description} />,
    defaultOptions
  ),
  
  // Info notifications
  info: (message) => toast.info(message, defaultOptions),
  infoWithDetails: (title, description) => toast.info(
    <ToastWithDetails title={title} description={description} />,
    defaultOptions
  )
};