import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Ensure this file exists

const categories = [
  "Mathematics", "Biology and Biotechnology", "Chemistry", "Computer Science",
  "Physics", "Behavioural Science", "Technology & Applied Technology",
  "Robotics", "Food Science & Home Economics", "Agriculture",
  "Energy & Transport", "Environmental Science"
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Digital KSEF</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories Grid */}
      <div className="categories-container">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <Link
              to={`/category/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              key={index}
              className="category-link"
            >
              <div className="category-box">{category}</div>
            </Link>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
