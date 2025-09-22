import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

// Assets
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


// Hero SVG Assets
import HeroBg from "../assets/hero-bg.svg"; // Updated to use latest hero-bg.svg
import BulbSvg from "../assets/bulb.svg";
import ArrowGetStarted from "../assets/arrow-getstarted.svg";
import ReadMoreArrow from "../assets/readmore-arrow.svg";

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

      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* HERO */}
        <section 
          className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] w-full"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 h-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full min-h-[400px] sm:min-h-[500px]">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6 flex flex-col justify-center order-2 lg:order-1">
                {/* Tagline with bulb */}
                <div className="inline-flex items-center bg-blue-100 rounded-full px-3 sm:px-4 py-2 w-fit">
                  <span className="text-blue-800 text-xs sm:text-sm font-medium">Bring your ideas to life</span>
                  <img src={BulbSvg} alt="💡" className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                  Turning Visions into Digital Products
                </h1>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
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
              <div className="hidden lg:block h-full min-h-[300px] xl:min-h-[400px] order-1 lg:order-2">
                {/* This div ensures the right side shows the background illustration */}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-left">Trusted Technology Partner for</h2>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-left">World-Class Enterprises</h3>
            <p className="text-gray-600 text-left mb-8 sm:mb-12 max-w-3xl text-sm sm:text-base">
              We leverage cutting-edge technology and innovation to empower enterprises and startups in their 
              digital transformation journey. With AI-driven custom software solutions, we deliver unmatched 
              expertise and actionable results that drive real business impact.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
              {partnerLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className="h-8 sm:h-10 lg:h-12 object-contain" />
              ))}
            </div>
          </div>
        </section>

{/* ABOUT */}
<section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6">
    
    {/* Left Content */}
    <div className="order-2 md:order-1">
      <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-sm">ABOUT US</h4>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
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
      <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
        More About Us
      </button>
    </div>

    {/* Right Thumbnail */}
    <div className="relative order-1 md:order-2">
      <img
        src={AboutUsThumbnail}
        alt="About Us Thumbnail"
        className="w-full h-auto"
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
    backgroundSize: "100% auto", // fill width, keep height
    backgroundPosition: "top center",
    minHeight: "1455px", // match your SVG’s height
  }}
>
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Upcoming Preneurs</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        We don't just build for others, we build for ourselves too. Here's a sneak peek at what's launching soon.
      </p>
    </div>

    {/* My Protector (NO arc) */}
    <div className="mb-8 relative">
      <div className="bg-[#35969C] text-white rounded-[30px] p-10 flex flex-col lg:flex-row items-center justify-between shadow-lg relative overflow-hidden">
        {/* Left content */}
        <div className="text-left max-w-lg mb-8 lg:mb-0 relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5 border border-white/30">
            <img src={Project1Image} alt="My Protector" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-2xl font-bold mb-4">My Protector</h3>
          <p className="text-white/90 text-base leading-relaxed">
            A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center lg:justify-end items-end relative z-10">
          <img src={MenBlackSuit} alt="My Protector Illustration" className="h-72 lg:h-80 object-contain -ml-6" />
        </div>
      </div>
    </div>

    {/* Grid for EzyCop + Krishi Sathi */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* EzyCop */}
      <div className="bg-[#008CDE] text-white rounded-[30px] p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
        {/* Arc overlay with blend mode */}
        <img 
          src={ArcVector} 
          alt="" 
          className="absolute top-0 left-0 w-full object-cover mix-blend-screen pointer-events-none" 
        />

        {/* Logo + Text */}
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5 border border-white/30">
            <img src={Project2Image} alt="EzyCop" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-3">EzyCop</h3>
          <p className="text-white/90 text-base leading-relaxed mb-6">
            A powerful personal security app that lets you instantly connect with verified bodyguards, anytime, anywhere.
          </p>
        </div>

        {/* Illustration */}
        <div className="relative z-10 flex justify-center">
          <img src={EzycopImage} alt="EzyCop Illustration" className="max-h-64 object-contain" />
        </div>
      </div>

      {/* Krishi Sathi */}
      <div className="bg-[#7CD142] text-white rounded-[30px] p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
        {/* Arc overlay with blend mode */}
        <img 
          src={ArcVector} 
          alt="" 
          className="absolute top-0 left-0 w-full object-cover mix-blend-screen pointer-events-none" 
        />

        {/* Logo + Text */}
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5 border border-white/30">
            <span className="text-white text-2xl">🌱</span>
          </div>
          <h3 className="text-xl font-bold mb-3">Krishi Sathi</h3>
          <p className="text-white/90 text-base leading-relaxed mb-6">
            Krishify App kisaano ke liye ek agriculture app hai. Is app me kisaan pashupalan, krishi yantra, mausam.
          </p>
        </div>

        {/* Illustration */}
        <div className="relative z-10 flex justify-center items-end">
          <img src={KrishiThumb} alt="Krishi Sathi Illustration" className="max-h-72 object-contain" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* BLOG */}
<section id="news" className="relative bg-white py-24 sm:py-28 lg:py-32">
  <div className="w-full max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="mb-14">
      <p className="text-blue-600 text-sm font-semibold uppercase mb-2">
        OUR LATEST NEWS
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
        The Freshest Trending <br className="hidden sm:block" />
        Blog and Articles Keep up
      </h2>
    </div>

    {/* Blog Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          {/* Thumbnail */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />

          {/* Card Content */}
          <div className="p-6">
            {/* Meta Info */}
            <div
              className="flex items-center text-sm font-medium mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(0,0,0,0.4)", // black 40%
              }}
            >
              {/* Calendar + Date */}
              <div className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
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
                  className="w-4 h-4 mr-1"
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
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {post.title}
            </h3>

            {/* Read More */}
            <a
              href="#"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600, // SemiBold
                fontSize: "20px",
                lineHeight: "60px",
                color: "#1D4ED8",
              }}
            >
              Read More
              <img
                src={ReadMoreArrow}
                alt="Read More Arrow"
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center mt-10">
      <div className="flex space-x-2">
        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
      </div>
    </div>

    {/* View All Button */}
    <div className="flex justify-center mt-8">
      <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition">
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