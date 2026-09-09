import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/restaurants?category=${encodeURIComponent(category.name)}`} className="category-card">
      <span>{category.icon}</span>
      <strong>{category.name}</strong>
      <small>Explore</small>
    </Link>
  );
}
