import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scrolling Function
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setNav(false); // Close mobile menu after clicking a link
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold primary-color">
          <a href="/">TriciaSpeaks</a>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-400">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${item}`);
                }}
                className="font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent transition duration-300 ease-in-out hover:from-pink-500 hover:to-indigo-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-[60%] h-full bg-[#202121] text-gray-300 p-6 transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-3xl primary-color mb-4">TriciaSpeaks</h1>
          <ul className="text-2xl space-y-6">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <li key={index} onClick={() => scrollToSection(`#${item}`)}>
                <a href={`#${item}`} className="hover:primary-color transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
