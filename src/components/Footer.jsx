import React from "react";
import BgFooterFrame from "../assets/bg-footer-frame.svg";
import RoundCut from "../assets/round-cut.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1D4ED8] text-white relative overflow-hidden" id="contact">
      {/* Background tiled pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${BgFooterFrame})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "top left",
          filter: "brightness(1.4) contrast(1.2)",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">Current Openings</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">Contact Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">Blogs</a></li>
            </ul>
          </div>

          {/* Product */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">My Protector</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">EzyCop</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">Krishi Saathi</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">Terms of Use</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition text-sm">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Round Cut Decorations */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-3 sm:w-4 h-3 sm:h-4 opacity-30">
              <img src={RoundCut} alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-1/3 right-8 sm:right-10 w-2.5 sm:w-3 h-2.5 sm:h-3 opacity-20">
              <img src={RoundCut} alt="" className="w-full h-full" />
            </div>
            <div className="absolute bottom-6 sm:bottom-8 right-3 sm:right-4 w-4 sm:w-5 h-4 sm:h-5 opacity-25">
              <img src={RoundCut} alt="" className="w-full h-full" />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Top Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Have Questions?</h3>
                  <p className="text-blue-100 text-sm mb-3">Get in touch with us</p>
                  <p className="text-lg sm:text-xl font-bold text-white">+91 01169310237</p>
                </div>
                <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-white bg-opacity-40 transform -translate-x-1/2"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Address</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    B/17-6, Bhimpur, Forest Park,<br />
                    Bhubaneswar, Odisha 751009
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white bg-opacity-40 mb-6"></div>

              {/* Email & Social */}
              <div>
                <h4 
                  className="font-semibold mb-2 text-white"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '18px' }}
                >
                  Email Us
                </h4>
                <p 
                  className="text-blue-100 mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '20px' }}
                >
                  support@quantrodev.com
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition">
                    <span className="text-xs font-bold text-white">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition">
                    <span className="text-xs font-bold text-white">𝕏</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition">
                    <span className="text-xs font-bold text-white">in</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition">
                    <span className="text-xs font-bold text-white">▶</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1B47C2] px-4 sm:px-6 py-3 relative z-20">
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-white text-center opacity-70 text-xs sm:text-sm font-semibold"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Operated by Rashtra Bharosa Group / All Rights Reserved by Rashtra Bharosa Group
          </p>
        </div>
      </div>
    </footer>
  );
}
