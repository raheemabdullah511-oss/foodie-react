import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, subtotal, deliveryFee, total } = useCart();

  if (!cart.length) return <section className="page-section container"><div className="empty-state cart-empty"><div className="empty-icon"><ShoppingBag size={35}/></div><h1>Your cart is empty</h1><p>Looks like you haven't added anything yet. Let's fix that.</p><Link to="/restaurants" className="primary-btn">Explore Restaurants <ArrowRight size={17}/></Link></div></section>;

  return (
    <section className="page-section container">
      <div className="page-title compact"><span className="eyebrow">Ready when you are</span><h1>Your Cart</h1><p>{cart.reduce((s,i)=>s+i.quantity,0)} item(s) selected</p></div>
      <div className="cart-layout">
        <div className="cart-list">{cart.map(item => <CartItem key={item.id} item={item}/>)}</div>
        <aside className="summary-card"><span className="eyebrow">Order summary</span><h2>Checkout</h2><div className="summary-lines"><div><span>Subtotal</span><b>Rs. {subtotal}</b></div><div><span>Delivery fee</span><b>{deliveryFee ? `Rs. ${deliveryFee}` : "FREE"}</b></div>{subtotal >= 1500 && <small>🎉 You unlocked free delivery!</small>}<div className="summary-total"><span>Total</span><b>Rs. {total}</b></div></div><Link to="/checkout" className="primary-btn full">Proceed to Checkout <ArrowRight size={17}/></Link></aside>
      </div>
    </section>
  );
}
