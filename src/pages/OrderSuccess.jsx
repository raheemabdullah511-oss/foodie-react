import React from "react";
import { CheckCircle2, Clock3, Home, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  let order = null;
  try { order = JSON.parse(localStorage.getItem("foodie-last-order")); } catch {}
  return <section className="page-section container"><div className="success-card"><div className="success-icon"><CheckCircle2 size={54}/></div><span className="eyebrow">Order confirmed</span><h1>Order placed successfully!</h1><p>Thank you{order?.name ? `, ${order.name}` : ""}. Your delicious order is being prepared.</p><div className="success-details"><div><PackageCheck/><span><small>Order ID</small><b>{order?.orderId || "FD-84921"}</b></span></div><div><Clock3/><span><small>Estimated delivery</small><b>25–40 minutes</b></span></div><div><span className="rs">Rs</span><span><small>Total</small><b>Rs. {order?.total || 0}</b></span></div></div><Link to="/" className="primary-btn"><Home size={17}/> Back to Home</Link></div></section>;
}
