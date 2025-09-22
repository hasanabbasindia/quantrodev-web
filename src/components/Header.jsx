import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const navigationItems = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Careers", href: "#careers" },
  { label: "News & Blogs", href: "#news" },
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" aria-label="Go to homepage">
          <img src={Logo} alt="Logo" className="h-12" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-blue-600 font-semibold transition"
            >
              {item.label}
            </a>
          ))}
          <Link to="/contact">
            <button className="px-5 py-2 rounded-lg border border-blue-700 text-blue-700 font-bold hover:bg-blue-700 hover:text-white transition">
              Contact Us
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
