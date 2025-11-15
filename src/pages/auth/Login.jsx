import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simple mock auth: store token and redirect
    localStorage.setItem("memorae_token", "demo-token");
    nav("/app");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[420px] p-8 bg-white rounded-2xl shadow"
    >
      <h3 className="text-2xl font-bold mb-4">Sign in to Memorae</h3>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        className="w-full p-3 border rounded mb-3"
      />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
        className="w-full p-3 border rounded mb-4"
      />
      <button className="btn-primary w-full">Sign in</button>
    </form>
  );
}
