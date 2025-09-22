import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

// Assets
import HeroImage from "../assets/hero.png";
import AboutImage from "../assets/about.png";
import Project1Image from "../assets/project1.png";
import Project2Image from "../assets/project2.png";
import Blog1Image from "../assets/blog1.png";
import Blog2Image from "../assets/blog2.png";
import Blog3Image from "../assets/blog3.png";

const partnerLogos = [
  { src: "./assets/partner1.png", alt: "Partner 1" },
  { src: "./assets/partner2.png", alt: "Partner 2" },
  { src: "./assets/partner3.png", alt: "Partner 3" },
  { src: "./assets/partner4.png", alt: "Partner 4" },
];

const blogPosts = [
  { id: 1, image: Blog1Image, title: "Guide on Software Development Cost", date: "Aug, 2025", author: "Admin" },
  { id: 2, image: Blog2Image, title: "Trends in Mobile App Security", date: "Aug, 2025", author: "Admin" },
  { id: 3, image: Blog3Image, title: "Future of AI in Business", date: "Aug, 2025", author: "Admin" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                Turning Visions into Digital Products
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                We leverage cutting-edge technology and innovation to empower enterprises and startups in their
                digital transformation journey.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="px-6 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-lg border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
            <img src={HeroImage} alt="Hero" className="w-full rounded-lg shadow-lg" />
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-10">Trusted By</h2>
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
            <img src={AboutImage} alt="About us" className="rounded-lg shadow-lg" />
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 leading-relaxed">
                We create diverse, complex web and mobile solutions for any business need. With us, you get quality
                software and perfect service every time.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="My Protector"
                description="A personal security app that connects you with verified bodyguards anytime, anywhere."
                image={Project1Image}
                bgColor="bg-teal-600"
              />
              <ProjectCard
                title="EzyCop"
                description="An advanced safety app that connects you with emergency services in real time."
                image={Project2Image}
                bgColor="bg-blue-600"
              />
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="news" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Latest News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{post.date} • {post.author}</p>
                    <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                    <a href="#" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                      Read More →
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
