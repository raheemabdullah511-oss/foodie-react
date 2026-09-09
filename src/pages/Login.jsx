import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({email:"",password:""});
  const [error,setError] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!login(form.email, form.password)) { setError("Account not found or password is incorrect. Sign up first if you are new."); return; }
    navigate("/");
  };

  return <section className="auth-page"><div className="auth-card"><div className="auth-logo"><span className="brand-mark">F</span></div><span className="eyebrow">Welcome back</span><h1>Login to Foodie</h1><p>Continue your food journey.</p><form onSubmit={submit}><label><Mail size={16}/> Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label><LockKeyhole size={16}/> Password<input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="••••••••"/></label>{error && <div className="form-error">{error}</div>}<button className="primary-btn full">Login</button></form><div className="auth-switch">Don't have an account? <Link to="/signup">Sign Up</Link></div></div></section>;
}
