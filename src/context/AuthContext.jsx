import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("foodie-user")) || null; }
    catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem("foodie-user", JSON.stringify(user));
    else localStorage.removeItem("foodie-user");
  }, [user]);

  const signup = (data) => {
    localStorage.setItem("foodie-account", JSON.stringify(data));
    setUser({ name: data.name, email: data.email });
  };

  const login = (email, password) => {
    const account = JSON.parse(localStorage.getItem("foodie-account") || "null");
    if (!account || account.email !== email || account.password !== password) return false;
    setUser({ name: account.name, email: account.email });
    return true;
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, signup, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
