import React from "react";
import FooterBg from "../assets/footer1.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <img src={FooterBg} alt="Footer Logo" className="mx-auto h-12 mb-6" />
        <p className="text-gray-400">
          © 2025 QuantroDev Technologies Enterprise. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
