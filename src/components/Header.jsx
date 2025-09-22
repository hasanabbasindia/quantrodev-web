import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const navigationItems = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Careers", href: "#careers" },
  { label: "News & Blogs", href: "#news" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Go to homepage" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap text-sm xl:text-base px-3 py-2 rounded-md hover:bg-blue-50"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="ml-4 px-4 xl:px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition whitespace-nowrap text-sm xl:text-base"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transform transition duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transform transition duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600 font-medium transition py-3 px-3 rounded-md hover:bg-blue-50"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="w-full mt-4 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
