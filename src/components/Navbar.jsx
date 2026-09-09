import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu as MenuIcon, X, UserRound, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">F</span>
          <span>Foodie</span>
        </Link>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>

        <div className={`nav-content ${open ? "open" : ""}`}>
          <div className="nav-links">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/restaurants" onClick={() => setOpen(false)}>Restaurants</NavLink>
            <NavLink to="/offers" onClick={() => setOpen(false)}>Offers</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          </div>

          <div className="nav-actions">
            <Link to="/cart" className="cart-link" onClick={() => setOpen(false)}>
              <ShoppingBag size={20} />
              <span>Cart</span>
              {itemCount > 0 && <b>{itemCount}</b>}
            </Link>

            {user ? (
              <div className="user-area">
                <span className="welcome"><UserRound size={17} /> {user.name}</span>
                <button className="logout-btn" onClick={handleLogout}><LogOut size={16} /> Logout</button>
              </div>
            ) : (
              <>
                <Link className="login-btn" to="/login" onClick={() => setOpen(false)}>Login</Link>
                <Link className="signup-btn" to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
