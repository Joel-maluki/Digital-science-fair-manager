import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CategoryPage from "./pages/CategoryPage"; // New Category Page

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      setShowLogin(false);
    } catch (err) {
      alert("Login failed! Check credentials.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="brand">Digital KSEF</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>

            {user ? (
              <>
                <li><span className="user-role">Logged in as {user.role}</span></li>
                <li><button className="nav-btn logout-btn" onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <li><button className="nav-btn" onClick={() => setShowLogin(true)}>Login</button></li>
            )}
          </ul>
          <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        {/* Login and Register Pop-ups */}
        {showLogin && <Login onClose={() => setShowLogin(false)} onRegister={() => { setShowLogin(false); setShowRegister(true); }} onLogin={handleLogin} />}
        {showRegister && <Register onClose={() => setShowRegister(false)} />}

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>Contact us: +254 717 072953 | Email: malukijoe7@gmail.com</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <p>&copy; 2025 Digital KSEF. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
