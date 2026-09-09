import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";
import { offers } from "../data/offers";

export default function Offers() {
  return <section className="page-section container"><div className="page-title"><span className="eyebrow">Foodie rewards</span><h1>Special Offers</h1><p>Demo promotions designed to make your next order even better.</p></div><div className="offers-page-grid">{offers.map(o=><div className="offer-card large-offer" key={o.id}><span className="offer-icon">{o.icon}</span><span className="offer-badge">{o.badge}</span><h2>{o.title}</h2><p>{o.text}</p><Link to="/restaurants">Explore restaurants <ArrowRight size={16}/></Link></div>)}</div><div className="promo-banner"><div><Gift/><div><span className="eyebrow">Today's idea</span><h2>Order your favourites and enjoy the moment.</h2></div></div><Link to="/restaurants" className="primary-btn">Start Ordering</Link></div></section>;
}
