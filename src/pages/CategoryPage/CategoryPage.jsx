import React from "react";
import "./categorypage.css";
import StandardCard from "../../components/Cards/StandardCard/StandardCard";
const CategoryPage = () => {
  return (
    <div className="category-section">
      <div className="category-container">
        <div className="category-card">
          <StandardCard />
        </div>
        <div className="category-card">
          <StandardCard />
        </div>
        <div className="category-card">
          <StandardCard />
        </div>
        <div className="category-card">
          <StandardCard />
        </div>
        <div className="category-card">
          <StandardCard />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
