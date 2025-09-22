import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Links */}
          <div className="grid grid-cols-3 gap-8">
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
          </div>

          {/* Right Side - Contact Info Box */}
          <div className="bg-[#366AFF] rounded-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              {/* Have Questions Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Have Questions?</h3>
                <p className="text-blue-100 mb-2">Get in touch with us</p>
                <p className="text-2xl font-bold mb-6">+91 01169310237</p>

                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-blue-100 mb-4">support@quantrodev.com</p>

                <div className="flex space-x-3 mt-6">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <span className="text-sm font-bold">𝕏</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <span className="text-sm font-bold">in</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition"
                  >
                    <span className="text-sm font-bold">▶</span>
                  </a>
                </div>
              </div>

              {/* Address Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Address</h3>
                <p className="text-blue-100 leading-relaxed">
                  B/17-6, Bhimpur, Forest Park,
                  <br />
                  Bhubaneswar, Odisha 751009
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="bg-[#1B47C2] -mx-6 px-6 mt-12 pt-6 pb-6 rounded-none">
          <p className="text-white text-sm text-center">
            Operated by Rashtra Bharosa Group / All Rights Reserved by Rashtra
            Bharosa Group
          </p>
        </div>
      </div>
    </footer>
  );
}
