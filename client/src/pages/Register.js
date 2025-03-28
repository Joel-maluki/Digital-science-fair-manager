import React from "react";
import "../styles/Register.css";

const Register = ({ onClose }) => {
  return (
    <div className="login-overlay" onClick={(e) => e.target.classList.contains("login-overlay") && onClose()}>
      <div className="login-popup">
        <h2>Register</h2>
        <form>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter full name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password:</label>
          <input type="password" placeholder="Create a password" required />

          <button type="submit">Register</button>
        </form>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default Register;
