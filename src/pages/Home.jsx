import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

// Assets
import HeroImage from "../assets/hero.png";
import AboutImage from "../assets/about.png";
import Project1Image from "../assets/project1.png";
import Project2Image from "../assets/project2.png";
import Project3Image from "../assets/project3.png";
import MenBlackSuit from "../assets/men_black_suit.png";
import EzycopImage from "../assets/ezycop.png";
import KrishiThumb from "../assets/krishi-thumb.png";
import ArcVector from "../assets/arc.svg";
import Blog1Image from "../assets/blog1.png";

// Hero SVG Assets
import HeroBg from "../assets/hero-bg.svg"; // Updated to use latest hero-bg.svg
import BulbSvg from "../assets/bulb.svg";
import ArrowGetStarted from "../assets/arrow-getstarted.svg";

// Partner Images
import Partner1Image from "../assets/partner1.png";
import Partner2Image from "../assets/partner2.png";
import Partner3Image from "../assets/partner3.png";
import Partner4Image from "../assets/partner4.png";
import Partner5Image from "../assets/partner5.png";

const partnerLogos = [
  { src: Partner1Image, alt: "Optima" },
  { src: Partner2Image, alt: "Recreate" },
  { src: Partner3Image, alt: "Digitek" },
  { src: Partner4Image, alt: "NeuroVirt" },
  { src: Partner5Image, alt: "Verna" },
];

const blogPosts = [
  { id: 1, image: Blog1Image, title: "A Detailed Guide on Software Development Cost", date: "Aug, 2025", author: "Admin" },
  { id: 2, image: Blog1Image, title: "A Detailed Guide on Software Development Cost", date: "Aug, 2025", author: "Admin" },
  { id: 3, image: Blog1Image, title: "A Detailed Guide on Software Development Cost", date: "Aug, 2025", author: "Admin" },
];

export default function Home() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section 
          className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white min-h-[600px] lg:min-h-[800px] w-full"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability - very light */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full min-h-[500px]">
              {/* Left Content */}
              <div className="space-y-6 flex flex-col justify-center">
                {/* Tagline with bulb */}
                <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 w-fit">
                  <span className="text-blue-800 text-sm font-medium">Bring your ideas to life</span>
                  <img src={BulbSvg} alt="💡" className="w-4 h-4 ml-2" />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Turning Visions into Digital Products
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  We build high-quality digital products for startups, enterprises and ourselves.
                </p>
                
                <div className="pt-4">
                  <button className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-lg">
                    <span>Get Started</span>
                    <img src={ArrowGetStarted} alt="→" className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Right side - Space for background illustration to show through */}
              <div className="hidden lg:block h-full min-h-[400px]">
                {/* This div ensures the right side shows the background illustration */}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS - Moved to position 2 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-left">Trusted Technology Partner for</h2>
            <h3 className="text-3xl font-bold mb-8 text-left">World-Class Enterprises</h3>
            <p className="text-gray-600 text-left mb-12 max-w-3xl">
              We leverage cutting-edge technology and innovation to empower enterprises and startups in their 
              digital transformation journey. With AI-driven custom software solutions, we deliver unmatched 
              expertise and actionable results that drive real business impact.
            </p>
            <div className="flex justify-between items-center">
              {partnerLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className="h-12 object-contain" />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT - Moved to position 3 */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
            <div>
              <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">ABOUT US</h4>
              <h2 className="text-3xl font-bold mb-6">Lorem Ipsum is simply dummy text of the printing</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We create diverse, complex, web and mobile solutions for any business need. With us, you get quality 
                software and perfect service every time.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                More About Us
              </button>
            </div>
            <div className="relative">
              <img src={AboutImage} alt="About us" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* PROJECTS - Moved to position 4 */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Upcoming Preneurs</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-600 text-lg">
                  We don't just build for others, we build for ourselves too. Here's a sneak peek at what's launching soon.
                </p>
              </div>
            </div>
            
            {/* First row - My Protector (full width) */}
            <div className="mb-8">
              <div className="bg-[#35969C] text-white rounded-2xl p-8 flex items-center justify-between shadow-lg relative overflow-hidden min-h-[320px]">
                <div className="text-left flex-1 z-10 max-w-lg">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                    <img src={Project1Image} alt="My Protector" className="w-12 h-12 rounded-lg object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">My Protector</h3>
                  <p className="text-white opacity-90 text-base leading-relaxed">
                    A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
                  </p>
                </div>
                <div className="flex-1 flex justify-end items-end z-10">
                  <img src={MenBlackSuit} alt="Man in Black Suit" className="h-72 w-auto object-contain" />
                </div>
                {/* Decorative background elements */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/5 to-transparent"></div>
              </div>
            </div>

            {/* Second row - EzyCop and Krishi Sathi */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* EzyCop */}
              <div className="bg-[#008CDE] text-white rounded-2xl p-8 shadow-lg relative overflow-hidden min-h-[480px] flex flex-col">
                {/* Arc SVG */}
                <img 
                  src={ArcVector} 
                  alt="" 
                  className="absolute top-0 right-0 w-20 h-20 opacity-15 pointer-events-none"
                  style={{
                    transform: 'translate(25%, -25%)',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
                
                <div className="text-left mb-6">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                    <img src={Project2Image} alt="EzyCop" className="w-12 h-12 rounded-lg object-contain" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">EzyCop</h3>
                  <p className="text-white opacity-90 mb-6 text-sm leading-relaxed">
                    A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <img src={EzycopImage} alt="EzyCop App" className="w-64 h-auto object-contain" />
                </div>
              </div>

              {/* Krishi Sathi */}
              <div className="bg-[#7CD142] text-white rounded-2xl p-8 shadow-lg relative overflow-hidden min-h-[480px] flex flex-col">
                {/* Arc SVG */}
                <img 
                  src={ArcVector} 
                  alt="" 
                  className="absolute top-0 right-0 w-20 h-20 opacity-12 pointer-events-none"
                  style={{
                    transform: 'translate(25%, -25%)',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
                
                <div className="text-left mb-6">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🌱</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Krishi Sathi</h3>
                  <p className="text-white opacity-90 mb-6 text-sm leading-relaxed">
                    Krishify App kisaano ke liye ek agriculture app hai. Is app me kisaan pashupalan, krishi yantra, mausam.
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <img src={KrishiThumb} alt="Krishi Sathi" className="w-64 h-auto object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG - Position 5 */}
        <section id="news" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-left">OUR LATEST NEWS</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-12">
              The Freshest Trending Blog and Articles Keep up
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-3">📅 {post.date} 👤 {post.author}</p>
                    <h3 className="text-lg font-bold mb-4">{post.title}</h3>
                    <a href="#" className="text-blue-600 font-semibold hover:underline">
                      Read More ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Interactive Slider Dots */}
            <div className="flex justify-center space-x-3 mb-6">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveDot(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    activeDot === index 
                      ? 'bg-blue-600 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center">
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium">
                View All
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}