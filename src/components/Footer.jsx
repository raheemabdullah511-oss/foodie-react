import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand"><span className="brand-mark">F</span><span>Foodie</span></Link>
          <p>Great food, trusted restaurants and a smoother way to satisfy every craving.</p>
          <div className="socials"><a href="#facebook"><Facebook size={18}/></a><a href="#instagram"><Instagram size={18}/></a><a href="#twitter"><Twitter size={18}/></a><a href="#youtube"><Youtube size={18}/></a></div>
        </div>
        <div><h4>Explore</h4><Link to="/">Home</Link><Link to="/restaurants">Restaurants</Link><Link to="/offers">Offers</Link><Link to="/about">About</Link></div>
        <div><h4>Support</h4><a href="#help">Help Center</a><a href="#terms">Terms & Conditions</a><a href="#privacy">Privacy Policy</a><a href="#contact">Contact</a></div>
        <div className="footer-cta"><span className="eyebrow">Hungry?</span><h3>Your next favourite meal is one click away.</h3><Link to="/restaurants">Start ordering <ArrowUpRight size={17}/></Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Foodie. Frontend Abdullah.</span><span>Made with React & ♥</span></div>
    </footer>
  );
}
