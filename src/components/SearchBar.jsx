import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ large = false }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(`/restaurants?search=${encodeURIComponent(value)}`);
  };

  return (
    <form className={`search-bar ${large ? "large" : ""}`} onSubmit={submit}>
      <Search size={large ? 22 : 19}/>
      <input value={value} onChange={e => setValue(e.target.value)} placeholder="Search for food or restaurant" />
      <button type="submit">Search</button>
    </form>
  );
}
