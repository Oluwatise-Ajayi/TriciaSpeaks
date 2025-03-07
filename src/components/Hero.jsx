import React from "react";

const Hero = () => {
  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      style={{ backgroundImage: `url(/assets/LaptopBg.jpg)` }} 
      id="Home" 
      className="bg-cover bg-center min-h-screen"
    >
      <div className="relative isolate px-6 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-40 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Welcome to <span className="primary-color">Tricia Speaks</span> - Your Social Media Manager
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
            We provide expert social media management, content creation, and strategy development to elevate your online presence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => scrollToSection("Services")}
              className="rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection("About")}
              className="text-lg font-semibold text-gray-400 hover:text-indigo-500 transition"
            >
              Learn More <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
