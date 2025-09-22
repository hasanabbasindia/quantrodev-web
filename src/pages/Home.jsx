import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

// Assets
import HeroImage from "../assets/hero.png";
import AboutImage from "../assets/about.png";
import Project1Image from "../assets/project1.png";
import Project2Image from "../assets/project2.png";
import Project3Image from "../assets/project3.png"; // Need to add Krishi Sathi image
import Blog1Image from "../assets/blog1.png";

const partnerLogos = [
  { src: "./assets/partner1.png", alt: "Optima" },
  { src: "./assets/partner2.png", alt: "Recreate" },
  { src: "./assets/partner3.png", alt: "Digitek" },
  { src: "./assets/partner4.png", alt: "NeuroVirt" },
  { src: "./assets/partner5.png", alt: "Verna" },
];

const blogPosts = [
  { id: 1, image: Blog1Image, title: "A Detailed Guide on Software Development Cost", date: "Aug, 2025", author: "Admin" },
  { id: 2, image: Blog1Image, title: "A Detailed Guide on Software Development Cost", date: "Aug, 2025", author: "Admin" },
  { id: 3, image: Blog1Image, title: "A Detailed Guide on Software Development Cost", date: "Aug, 2025", author: "Admin" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Bring your ideas to life 💡
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                Turning Visions into Digital Products
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                We build high-quality digital products for startups, enterprises and ourselves.
              </p>
              <div className="mt-8">
                <button className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium">
                  Get Started
                </button>
              </div>
            </div>
            <img src={HeroImage} alt="Hero" className="w-full rounded-lg" />
          </div>
        </section>

        {/* PROJECTS - Changed title to "Our Upcoming Preneurs" */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Upcoming Preneurs</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              We don't just build for others, we build for ourselves too. Here's a sneak peek at what's launching soon.
            </p>
            
            {/* First row - My Protector (full width) */}
            <div className="mb-8">
              <div className="bg-teal-500 text-white rounded-2xl p-8 flex items-center justify-between shadow-lg">
                <div className="text-left flex-1">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                    <img src={Project1Image} alt="My Protector" className="w-10 h-10 rounded" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">My Protector</h3>
                  <p className="text-teal-100">
                    A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
                  </p>
                </div>
                <div className="flex-1 flex justify-end">
                  <img src={Project1Image} alt="My Protector Hero" className="max-w-sm" />
                </div>
              </div>
            </div>

            {/* Second row - EzyCop and Krishi Sathi */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-500 text-white rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <img src={Project2Image} alt="EzyCop" className="w-10 h-10 rounded" />
                </div>
                <h3 className="text-xl font-bold mb-4">EzyCop</h3>
                <p className="text-blue-100 mb-6">
                  A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
                </p>
                <img src={Project2Image} alt="EzyCop" className="w-full max-w-xs mx-auto" />
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌱</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Krishi Sathi</h3>
                <p className="text-gray-600 mb-6">
                  Krishify App kisaano ke liye ek agriculture app hai. Is app me kisaan pashupalan, krishi yantra, mausam.
                </p>
                <img src={Project3Image || "/api/placeholder/300/200"} alt="Krishi Sathi" className="w-full max-w-xs mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS - Moved after Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Trusted Technology Partner for</h2>
            <h3 className="text-3xl font-bold mb-8 text-center">World-Class Enterprises</h3>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We leverage cutting-edge technology and innovation to empower enterprises and startups in their 
              digital transformation journey. With AI-driven custom software solutions, we deliver unmatched 
              expertise and actionable results that drive real business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-12">
              {partnerLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className="h-12 object-contain" />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
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

        {/* BLOG */}
        <section id="news" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-center">OUR LATEST NEWS</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Freshest Trending Blog and Articles Keep up
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
