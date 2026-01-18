import React, { useEffect, useState } from "react";
import { Activity, Cpu, ShieldCheck, Building2, Layers, Map, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// Simple local UI primitives to avoid path aliases
function Card({ children }) {
  return <div className="rounded-2xl bg-white/5 border border-white/10">{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

function Button({ children, className = "", variant = "solid", onClick }) {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition";
  const variants = {
    outline: "border border-slate-500 text-slate-200 hover:bg-white/10",
    solid: "bg-emerald-500 hover:bg-emerald-600 text-black",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

/**
 * AnantaLink Website
 * - Single-page layout
 * - Anchor-based navigation
 * - Healthcare-only focus
 */
export default function AnantaLinkWebsite() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0f172a] text-slate-100" : "bg-white text-slate-900"}`}>

      {/* Navigation */}
      <nav className="px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/anantalink-logo.svg"
            alt="AnantaLink Logo"
            className="h-10"
          />
        </div>

        <ul className={`hidden md:flex space-x-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          <li><a href="#platform" className="hover:text-white">Platform</a></li>
          <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
          <li><a href="#architecture" className="hover:text-white">Architecture</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <Button
            variant="outline"
            className="px-3 py-2"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </Button>
        </div>
      </nav>

      {menuOpen && (
        <div className={`md:hidden px-4 pb-6 ${darkMode ? "bg-[#0f172a]" : "bg-white"}`}>
          <ul className="flex flex-col gap-4">
            <li><a onClick={() => setMenuOpen(false)} href="#platform">Platform</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#solutions">Solutions</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#architecture">Architecture</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-3 shadow-lg"
        aria-label="Back to top"
      >
        ↑
      </button>

    </div>
  );
}

/* ==========================
   Basic Render Tests (Example)
   ==========================

   NOTE:
   These tests are intentionally commented out because this file
   is a runtime React component, not a test module.
   Move the below code to a *.test.jsx file when setting up tests.

import { render, screen } from "@testing-library/react";
import AnantaLinkWebsite from "./AnantaLinkWebsite";

describe("AnantaLinkWebsite", () => {
  test("renders hero heading", () => {
    render(<AnantaLinkWebsite />);
    expect(screen.getByText(/SmartCare IoMT Ecosystem/i)).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<AnantaLinkWebsite />);
    expect(screen.getByText(/Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});
*/
