import React from "react";
import { Link } from "react-router-dom";
import { Clock3, Bike, Star } from "lucide-react";

export default function RestaurantCard({ restaurant }) {
  return (
    <article className="restaurant-card">
      <div className="restaurant-img-wrap">
        <img src={restaurant.image} alt={restaurant.name} />
        <span className="image-badge"><Star size={14} fill="currentColor"/> {restaurant.rating}</span>
      </div>
      <div className="restaurant-body">
        <div className="card-title-row"><h3>{restaurant.name}</h3><span className="open-dot">Open</span></div>
        <p className="muted">{restaurant.accent}</p>
        <div className="meta-row"><span><Clock3 size={15}/> {restaurant.deliveryTime}</span><span><Bike size={15}/> Rs. {restaurant.deliveryFee}</span></div>
        <div className="card-bottom"><span className="tag">{restaurant.tags}</span><Link to={`/restaurants/${restaurant.id}`} className="small-btn">View Menu</Link></div>
      </div>
    </article>
  );
}
