import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CreditCard, MapPin, Smartphone, Wallet } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, subtotal, deliveryFee, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("cod");
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [error, setError] = useState("");

  if (!cart.length) return <section className="page-section container"><div className="empty-state"><h1>Nothing to checkout</h1><p>Your cart is currently empty.</p><Link to="/restaurants" className="primary-btn">Start Ordering</Link></div></section>;

  const submit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError("Please complete your name, phone number and delivery address.");
      return;
    }
    const orderId = `FD-${Math.floor(10000 + Math.random() * 90000)}`;
    localStorage.setItem("foodie-last-order", JSON.stringify({ orderId, total, name: form.name }));
    clearCart();
    navigate("/order-success");
  };

  return (
    <section className="page-section container">
      <div className="page-title compact"><span className="eyebrow">Almost there</span><h1>Checkout</h1><p>Enter your details and choose a demo payment method.</p></div>
      <form className="checkout-grid" onSubmit={submit}>
        <div className="checkout-main">
          <div className="form-card"><div className="form-heading"><MapPin/><div><h2>Delivery details</h2><p>Where should we bring your food?</p></div></div><label>Full Name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Phone Number<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="03XX XXXXXXX"/></label><label>Address<textarea value={form.address} onChange={e=>setForm({...form,address:e.target.value})} placeholder="House, street, area..." rows="4"/></label></div>
          <div className="form-card"><div className="form-heading"><Wallet/><div><h2>Payment method</h2><p>Demo UI — no real payment is processed.</p></div></div><div className="payment-options"><button type="button" className={payment==="cod"?"selected":""} onClick={()=>setPayment("cod")}><Wallet/><span><b>Cash on Delivery</b><small>Pay when your order arrives</small></span></button><button type="button" className={payment==="card"?"selected":""} onClick={()=>setPayment("card")}><CreditCard/><span><b>Card</b><small>Demo card payment option</small></span></button></div>{payment==="card" && <div className="demo-card"><CreditCard/><span>Card details are not processed in this frontend demo.</span></div>}</div>
          {error && <div className="form-error">{error}</div>}
          <button className="primary-btn full place-btn">Place Order <ArrowRight size={18}/></button>
        </div>
        <aside className="summary-card sticky"><span className="eyebrow">Your order</span><h2>Order Summary</h2><div className="checkout-items">{cart.map(i=><div key={i.id}><span>{i.name} × {i.quantity}</span><b>Rs. {i.price*i.quantity}</b></div>)}</div><div className="summary-lines"><div><span>Subtotal</span><b>Rs. {subtotal}</b></div><div><span>Delivery</span><b>{deliveryFee ? `Rs. ${deliveryFee}` : "FREE"}</b></div><div className="summary-total"><span>Total</span><b>Rs. {total}</b></div></div><div className="secure-note"><Smartphone size={16}/> Frontend-only demo checkout</div></aside>
      </form>
    </section>
  );
}
