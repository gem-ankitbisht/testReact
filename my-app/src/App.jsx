
import "./App.css";
import LoginDocter from "./components/auth/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/SourceContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={<LoginDocter />}
                requiredRole="admin" // Use requiredRole to enforce authorization
              />
            }
          />
        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
