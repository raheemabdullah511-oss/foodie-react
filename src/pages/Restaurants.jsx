import React from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

const categories = ["All", "Pizza", "Burgers", "Chicken", "Chinese", "Desserts"];

export default function Restaurants() {
  const [params] = useSearchParams();
  const initialSearch = params.get("search") || "";
  const initialCategory = params.get("category") || "All";
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : "All");
  const [sort, setSort] = useState("rating");

  const filtered = useMemo(() => {
    let result = restaurants.filter(r => {
      const text = `${r.name} ${r.tags} ${r.category}`.toLowerCase();
      return text.includes(search.toLowerCase()) && (category === "All" || r.category === category);
    });
    if (sort === "rating") result.sort((a,b) => b.rating-a.rating);
    if (sort === "delivery") result.sort((a,b) => parseInt(a.deliveryTime)-parseInt(b.deliveryTime));
    if (sort === "fee") result.sort((a,b) => a.deliveryFee-b.deliveryFee);
    return result;
  }, [search, category, sort]);

  return (
    <section className="page-section container">
      <div className="page-title"><span className="eyebrow">Find your next meal</span><h1>Restaurants</h1><p>Explore popular local spots and discover something delicious.</p></div>
      <div className="restaurant-tools">
        <div className="mini-search"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search restaurants..." /></div>
        <div className="sort"><SlidersHorizontal size={17}/><select value={sort} onChange={e => setSort(e.target.value)}><option value="rating">Highest Rating</option><option value="delivery">Fastest Delivery</option><option value="fee">Lowest Delivery Fee</option></select></div>
      </div>
      <div className="filter-row">{categories.map(c => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div>
      {filtered.length ? <div className="restaurant-grid">{filtered.map(r => <RestaurantCard key={r.id} restaurant={r}/>)}</div> : <div className="empty-state"><div>🔎</div><h2>No restaurants found</h2><p>Try another restaurant name or category.</p><button onClick={() => {setSearch("");setCategory("All")}}>Clear filters</button></div>}
    </section>
  );
}
