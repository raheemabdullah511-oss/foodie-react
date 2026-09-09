import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bike, Clock3, Star } from "lucide-react";
import { restaurants } from "../data/restaurants";
import { foods } from "../data/foods";
import FoodCard from "../components/FoodCard";

export default function Menu() {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === Number(id));
  const [category, setCategory] = useState("All");

  if (!restaurant) return <section className="page-section container"><div className="empty-state"><div>🍽️</div><h2>Restaurant not found</h2><Link className="primary-btn" to="/restaurants">Back to restaurants</Link></div></section>;

  const menu = foods.filter(f => f.restaurantId === restaurant.id);
  const cats = ["All", ...new Set(menu.map(f => f.category))];
  const filtered = category === "All" ? menu : menu.filter(f => f.category === category);

  return (
    <section className="menu-page">
      <div className="container">
        <Link to="/restaurants" className="back-link"><ArrowLeft size={17}/> Back to restaurants</Link>
        <div className="restaurant-hero">
          <img src={restaurant.image} alt={restaurant.name}/>
          <div className="restaurant-hero-overlay"><div><span className="eyebrow">Now serving</span><h1>{restaurant.name}</h1><p>{restaurant.accent}</p></div><div className="restaurant-info"><span><Star size={16} fill="currentColor"/> {restaurant.rating}</span><span><Clock3 size={16}/> {restaurant.deliveryTime}</span><span><Bike size={16}/> Rs. {restaurant.deliveryFee}</span></div></div>
        </div>
        <div className="menu-toolbar"><div><span className="eyebrow">Our menu</span><h2>Choose your favourites</h2></div><div className="filter-row">{cats.map(c => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div></div>
        <div className="food-grid">{filtered.map(f => <FoodCard key={f.id} food={f}/>)}</div>
      </div>
    </section>
  );
}
