import React from "react";
import { Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(food);
    setAdded(true);
    setTimeout(() => setAdded(false), 1100);
  };

  return (
    <article className="food-card">
      <div className="food-image-wrap"><img src={food.image} alt={food.name}/><span><Star size={13} fill="currentColor"/> {food.rating}</span></div>
      <div className="food-body">
        <div className="food-title"><h3>{food.name}</h3><strong>Rs. {food.price}</strong></div>
        <p>{food.description}</p>
        <button className={`add-btn ${added ? "added" : ""}`} onClick={handleAdd}>
          {added ? "Added ✓" : <><Plus size={17}/> Add to Cart</>}
        </button>
      </div>
    </article>
  );
}
