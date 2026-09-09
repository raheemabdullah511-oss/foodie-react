import React from "react";
import { ArrowRight, Clock3, ShieldCheck, Sparkles, Truck, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import FoodCard from "../components/FoodCard";
import { categories } from "../data/categories";
import { restaurants } from "../data/restaurants";
import { foods } from "../data/foods";
import { offers } from "../data/offers";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15}/> Fresh flavours. Zero fuss.</span>
            <h1>Delicious food,<br/><em>delivered fast.</em></h1>
            <p>Discover the best local restaurants, crave-worthy dishes and offers made for your next meal.</p>
            <SearchBar large />
            <div className="hero-actions"><Link to="/restaurants" className="primary-btn">Explore Restaurants <ArrowRight size={18}/></Link><span className="trust"><ShieldCheck size={17}/> Simple & secure demo</span></div>
            <div className="hero-stats"><div><strong>50+</strong><span>Local dishes</span></div><div><strong>4.8★</strong><span>Average rating</span></div><div><strong>30m</strong><span>Avg. delivery</span></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-main"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1100&q=90" alt="Delicious food spread"/><div className="floating-order"><span className="check">✓</span><div><b>Order on the way</b><small>Arriving in 18–24 min</small></div></div></div>
            <div className="hero-pill pill-one">🍔 <b>4.9</b> top rated</div>
            <div className="hero-pill pill-two">🚴 Free delivery today</div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><div><span className="eyebrow">Browse by craving</span><h2>What are you in the mood for?</h2></div><Link to="/restaurants">See all <ArrowRight size={16}/></Link></div>
        <div className="category-grid">{categories.map(c => <CategoryCard key={c.name} category={c}/>)}</div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Handpicked for you</span><h2>Popular restaurants</h2></div><Link to="/restaurants">View all <ArrowRight size={16}/></Link></div>
          <div className="restaurant-grid">{restaurants.slice(0, 4).map(r => <RestaurantCard key={r.id} restaurant={r}/>)}</div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><div><span className="eyebrow">Trending now</span><h2>Popular dishes</h2></div><Link to="/restaurants">Explore menu <ArrowRight size={16}/></Link></div>
        <div className="food-grid">{foods.filter(f => f.popular).slice(0, 4).map(f => <FoodCard key={f.id} food={f}/>)}</div>
      </section>

      <section className="section container">
        <div className="offer-heading"><div><span className="eyebrow">Foodie rewards</span><h2>Special offers</h2></div><Link to="/offers">All offers <ArrowRight size={16}/></Link></div>
        <div className="offer-grid">{offers.map(o => <div className="offer-card" key={o.id}><span className="offer-icon">{o.icon}</span><span className="offer-badge">{o.badge}</span><h3>{o.title}</h3><p>{o.text}</p><Link to="/restaurants">Claim offer <ArrowRight size={15}/></Link></div>)}</div>
      </section>

      <section className="why-section">
        <div className="container why-grid">
          <div><span className="eyebrow">Why Foodie?</span><h2>A better way to order your favourites.</h2><p>Everything you need to find, choose and enjoy great food — wrapped in a clean, fast experience.</p></div>
          <div className="why-cards"><div><Truck/><h3>Fast delivery</h3><p>Clear delivery times before you order.</p></div><div><Utensils/><h3>Great variety</h3><p>Pizza, burgers, biryani, Chinese and desserts.</p></div><div><Clock3/><h3>Easy ordering</h3><p>A simple cart and checkout flow.</p></div></div>
        </div>
      </section>
    </>
  );
}
