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
        <Link to="/" aria-label="Go to homepage" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <Link to="/contact" className="ml-4">
            <button className="px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition whitespace-nowrap">
              Contact Us
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
