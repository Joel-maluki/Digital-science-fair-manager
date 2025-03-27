import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

const Login = ({ onClose, onRegister, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("userName", res.data.name);

      alert(`Welcome ${res.data.name}, Role: ${res.data.role}`);

      onLoginSuccess(res.data.role); // Call parent function with role
      onClose(); // Close login popup
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.msg || "Login failed. Try again.");
    }
  };

  return (
    <div className="login-overlay" onClick={(e) => e.target.classList.contains("login-overlay") && onClose()}>
      <div className="login-popup">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
        <p className="register-link">New? <span onClick={onRegister}>Register here</span></p>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default Login;
