import React from "react";
import { HeartHandshake, Leaf, Sparkles, Users } from "lucide-react";

export default function About() {
  return <section className="page-section">
    <div className="container about-hero"><div><span className="eyebrow">The Foodie story</span><h1>Good food should feel <em>easy.</em></h1><p>Foodie is a premium frontend concept built around one simple idea: make discovering restaurants and ordering food feel delightful from the first click to the final bite.</p></div><div className="about-image"><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1100&q=90" alt="Foodie table"/></div></div>
    <div className="container mission-grid"><div className="mission-card"><Sparkles/><h2>Our mission</h2><p>Bring together beautiful discovery, useful information and an easy ordering flow in one polished experience.</p></div><div className="mission-card"><HeartHandshake/><h2>Why Foodie</h2><p>Fast delivery details, quality restaurants, clear prices and a cart that simply works.</p></div></div>
    <div className="container about-values"><span className="eyebrow">What matters</span><h2>Built around the things hungry people care about.</h2><div className="values-grid"><div><Leaf/><h3>Quality</h3><p>Curated dishes and restaurants in a clean browsing experience.</p></div><div><Users/><h3>People first</h3><p>Simple interfaces that make every step easy to understand.</p></div><div><HeartHandshake/><h3>Trust</h3><p>Transparent prices, ratings and delivery information.</p></div></div></div>
  </section>;
}
