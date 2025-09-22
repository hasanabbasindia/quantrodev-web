import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  Current Openings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  My Protector
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  EzyCop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  Krishi Saathi
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Have Questions?</h3>
            <p className="text-blue-100 mb-2">Get in touch with us</p>
            <p className="text-xl font-bold mb-4">+91 01169310237</p>

            <h4 className="font-semibold mb-2">Email Us</h4>
            <p className="text-blue-100 mb-4">support@quantrodev.com</p>

            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-blue-100 text-sm">
              B/17-6, Bhimpur, Forest Park,
              <br />
              Bhubaneswar, Odisha 751009
            </p>

            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-400 transition"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-400 transition"
              >
                <span className="text-sm">𝕏</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-400 transition"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-400 transition"
              >
                <span className="text-sm">▶</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-12 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            Operated by Rashtra Bharosa Group / All Rights Reserved by Rashtra
            Bharosa Group
          </p>
        </div>
      </div>
    </footer>
  );
}
