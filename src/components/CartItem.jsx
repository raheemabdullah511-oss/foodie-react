import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increase, decrease, removeFromCart } = useCart();
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name}/>
      <div className="cart-item-info"><h3>{item.name}</h3><p>{item.description}</p><strong>Rs. {item.price}</strong></div>
      <div className="quantity"><button onClick={() => decrease(item.id)}><Minus size={15}/></button><b>{item.quantity}</b><button onClick={() => increase(item.id)}><Plus size={15}/></button></div>
      <div className="cart-line-total">Rs. {item.price * item.quantity}</div>
      <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item"><Trash2 size={18}/></button>
    </div>
  );
}
