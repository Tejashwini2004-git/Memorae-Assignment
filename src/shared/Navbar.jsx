import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <header className="py-4 shadow-sm bg-white fixed w-full z-30">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className="font-semibold">Memorae</div>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <button
            onClick={() => nav("/login")}
            className="px-4 py-2 rounded-md border"
          >
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}
