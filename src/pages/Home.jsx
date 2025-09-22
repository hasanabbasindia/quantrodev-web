import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

import HeroImage from "../assets/hero.png";
import AboutImage from "../assets/about.png";
import UpcomingFrame from "../assets/upcoming-frame.svg";
import Project1Image from "../assets/project1.png";
import Project2Image from "../assets/project2.png";
import Project3Image from "../assets/project3.png";
import MenBlackSuit from "../assets/men_black_suit.png";
import EzycopImage from "../assets/ezycop.png";
import KrishiThumb from "../assets/krishi-thumb.png";
import ArcVector from "../assets/arc.svg";
import Blog1Image from "../assets/blog1.png";
import AboutUsThumbnail from "../assets/about-us-thumbnail.svg";

import HeroBg from "../assets/hero-bg.svg";
import BulbSvg from "../assets/bulb.svg";
import ArrowGetStarted from "../assets/arrow-getstarted.svg";
import ReadMoreArrow from "../assets/readmore-arrow.svg";

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

      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* HERO */}
        <section 
          className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[800px] w-full"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 sm:from-white/40 via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center h-full min-h-[400px] sm:min-h-[500px]">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col justify-center text-center lg:text-left">
                {/* Tagline with bulb */}
                <div className="inline-flex items-center bg-blue-100 rounded-full px-3 sm:px-4 py-2 w-fit mx-auto lg:mx-0">
                  <span className="text-blue-800 text-xs sm:text-sm font-medium">Bring your ideas to life</span>
                  <img src={BulbSvg} alt="💡" className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                  Turning Visions into Digital Products
                </h1>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  We build high-quality digital products for startups, enterprises and ourselves.
                </p>
                
                <div className="pt-2 sm:pt-4">
                  <button className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-lg text-sm sm:text-base">
                    <span>Get Started</span>
                    <img src={ArrowGetStarted} alt="→" className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Right side - Space for background illustration */}
              <div className="hidden lg:block h-full min-h-[300px] xl:min-h-[400px]">
                {/* This div ensures the right side shows the background illustration */}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Trusted Technology Partner for</h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8">World-Class Enterprises</h3>
              <p className="text-gray-600 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
                We leverage cutting-edge technology and innovation to empower enterprises and startups in their 
                digital transformation journey. With AI-driven custom software solutions, we deliver unmatched 
                expertise and actionable results that drive real business impact.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="p-2 sm:p-3">
                  <img src={logo.src} alt={logo.alt} className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain hover:opacity-75 transition" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center px-4 sm:px-6 lg:px-8">
            
            {/* Left Content */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-xs sm:text-sm">ABOUT US</h4>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Lorem Ipsum is simply dummy text of the printing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                There are many variations of passages of Lorem Ipsum available, but the majority have 
                suffered alteration in some form, by injected humour, or randomised words which don't 
                look even slightly believable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                We create diverse, complex, web and mobile solutions for any business need. With us, 
                you get quality software and perfect service every time.
              </p>
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base font-medium">
                More About Us
              </button>
            </div>

            {/* Right Thumbnail */}
            <div className="relative order-1 md:order-2 flex justify-center">
              <img
                src={AboutUsThumbnail}
                alt="About Us Thumbnail"
                className="w-full max-w-md md:max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="products"
          className="relative w-full bg-white overflow-hidden"
          style={{
            backgroundImage: `url(${UpcomingFrame})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
            minHeight: "900px", // Reduced for mobile
          }}
        >
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Upcoming Preneurs</h2>
              <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
                We don't just build for others, we build for ourselves too. Here's a sneak peek at what's launching soon.
              </p>
            </div>

            {/* My Protector */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <div className="bg-[#35969C] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col lg:flex-row items-center justify-between shadow-lg relative overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
                {/* Left content */}
                <div className="text-center lg:text-left max-w-lg mb-6 lg:mb-0 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 border border-white/30 mx-auto lg:mx-0">
                    <img src={Project1Image} alt="My Protector" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">My Protector</h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex justify-center lg:justify-end items-end relative z-10">
                  <img src={MenBlackSuit} alt="My Protector Illustration" className="h-48 sm:h-60 md:h-72 lg:h-80 object-contain" />
                </div>
              </div>
            </div>

            {/* Grid for EzyCop + Krishi Sathi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* EzyCop */}
              <div className="bg-[#008CDE] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between">
                {/* Arc overlay */}
                <img 
                  src={ArcVector} 
                  alt="" 
                  className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen pointer-events-none opacity-70" 
                />

                {/* Logo + Text */}
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 border border-white/30 mx-auto">
                    <img src={Project2Image} alt="EzyCop" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">EzyCop</h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
                  </p>
                </div>

                {/* Illustration */}
                <div className="relative z-10 flex justify-center items-end">
                  <img src={EzycopImage} alt="EzyCop Illustration" className="max-h-48 sm:max-h-56 lg:max-h-64 object-contain" />
                </div>
              </div>

              {/* Krishi Sathi */}
              <div className="bg-[#7CD142] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between">
                {/* Arc overlay */}
                <img 
                  src={ArcVector} 
                  alt="" 
                  className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen pointer-events-none opacity-70" 
                />

                {/* Logo + Text */}
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 border border-white/30 mx-auto">
                    <span className="text-white text-lg sm:text-2xl">🌱</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Krishi Sathi</h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    Krishify App kisaano ke liye ek agriculture app hai. Is app me kisaan pashupalan, krishi yantra, mausam.
                  </p>
                </div>

                {/* Illustration */}
                <div className="relative z-10 flex justify-center items-end">
                  <img src={KrishiThumb} alt="Krishi Sathi Illustration" className="max-h-48 sm:max-h-56 lg:max-h-72 object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="news" className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
              <p className="text-blue-600 text-xs sm:text-sm font-semibold uppercase mb-2">
                OUR LATEST NEWS
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Freshest Trending <br className="hidden sm:block" />
                Blog and Articles Keep up
              </h2>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group"
                >
                  {/* Thumbnail */}
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6">
                    {/* Meta Info */}
                    <div
                      className="flex flex-wrap items-center text-xs sm:text-sm font-medium mb-3 gap-4"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: "rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* Calendar + Date */}
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 sm:w-4 h-3 sm:h-4 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3.75 9h16.5M4.5 7.5h15a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5V9a1.5 1.5 0 011.5-1.5z"
                          />
                        </svg>
                        <span>{post.date}</span>
                      </div>

                      {/* User + Admin */}
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 sm:w-4 h-3 sm:h-4 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
                          />
                        </svg>
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {post.title}
                    </h3>

                    {/* Read More */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 group"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#1D4ED8",
                      }}
                    >
                      Read More
                      <img
                        src={ReadMoreArrow}
                        alt="Read More Arrow"
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain group-hover:translate-x-1 transition"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex space-x-2 sm:space-x-3">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-600 rounded-full"></span>
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 rounded-full"></span>
              </div>
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition text-sm sm:text-base">
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