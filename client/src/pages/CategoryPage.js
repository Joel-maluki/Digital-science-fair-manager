import React from "react";
import { useParams } from "react-router-dom";

const categoryDetails = {
  mathematics: "Mathematics involves problem-solving, logic, and numbers.",
  "biology-and-biotechnology": "Study of living organisms and biotechnological advancements.",
  chemistry: "Chemistry is the study of substances and their interactions.",
  "computer-science": "Programming, AI, and computer systems.",
  physics: "Study of forces, motion, and the universe.",
  "behavioural-science": "Exploring human behavior and psychology.",
  "technology-applied-technology": "Innovations in engineering and applied sciences.",
  robotics: "The field of robots and automation.",
  "food-science-home-economics": "Understanding food production, health, and home management.",
  agriculture: "Farming, sustainability, and food production.",
  "energy-transport": "Exploring energy sources and transportation innovations.",
  "environmental-science": "Sustainability, pollution control, and climate studies."
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryInfo = categoryDetails[category] || "Details coming soon...";

  return (
    <div className="category-container">
      <h1>{category.replace(/-/g, " ")}</h1>
      <p>{categoryInfo}</p>
    </div>
  );
};

export default CategoryPage;
