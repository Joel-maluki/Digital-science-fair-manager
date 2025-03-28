import { useEffect, useState } from "react";
import { fetchCategories } from "../api/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    getCategories();
  }, []);

  return (
    <div>
      <h2>Science Fair Categories</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {categories.map((category, index) => (
          <div key={index} style={{
            padding: "20px",
            background: "#ffcc80",
            boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            textAlign: "center",
            width: "200px",
          }}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
