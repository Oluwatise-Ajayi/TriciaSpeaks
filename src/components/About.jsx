import React from "react";

const About = () => {
  return (
    <section id="About" className="bg-black py-16 px-6 scroll-smooth">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/profilePic.jpeg"
            alt="Tricia - Social Media Manager"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-indigo-600"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold primary-color">About Me</h2>
          <p className="mt-4 text-lg text-gray-400">
            Hi, I’m{" "}
            <span className="text-indigo-400 font-semibold">Tricia</span>! A
            social media strategist passionate about crafting content that
            resonates with audiences and drives engagement. With years of
            experience, I help brands build their online presence with
            strategic, creative, and data-driven approaches.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="bg-indigo-600 text-white py-3 px-6 rounded-md font-medium shadow-md hover:bg-indigo-500 transition duration-300"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
