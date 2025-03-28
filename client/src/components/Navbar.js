import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#222";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Science Fair</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/judge" style={styles.link}>Judge Panel</Link>
        <button onClick={toggleDarkMode} style={styles.toggleButton}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#008080",
    padding: "10px 20px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  logo: {
    color: "#fff",
    margin: "0",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "0.3s",
  },
  toggleButton: {
    backgroundColor: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
  },
};

export default Navbar;
