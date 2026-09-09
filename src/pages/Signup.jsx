import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({name:"",email:"",password:"",confirm:""});
  const [error,setError] = useState("");

  const submit = e => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    if (form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
    signup(form);
    navigate("/");
  };

  return <section className="auth-page"><div className="auth-card"><div className="auth-logo"><span className="brand-mark">F</span></div><span className="eyebrow">Join the table</span><h1>Create your Foodie account</h1><p>Save your demo login and keep ordering smoothly.</p><form onSubmit={submit}><label><UserRound size={16}/> Full Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label><Mail size={16}/> Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label><LockKeyhole size={16}/> Password<input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="At least 6 characters"/></label><label><LockKeyhole size={16}/> Confirm Password<input type="password" required value={form.confirm} onChange={e=>setForm({...form,confirm:e.target.value})} placeholder="Repeat password"/></label>{error && <div className="form-error">{error}</div>}<button className="primary-btn full">Create Account</button></form><div className="auth-switch">Already have an account? <Link to="/login">Login</Link></div></div></section>;
}
