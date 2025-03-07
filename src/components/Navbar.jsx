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
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolling ? "bg-black shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold primary-color">TriciaSpeaks</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-400">
          <li className="hover:text-black transition duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-black transition duration-300">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-black transition duration-300">
            <a href="#Services">Services</a>
          </li>
          <li className="hover:text-black transition duration-300">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? "fixed left-0 top-0 w-[60%] h-full bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%]"
          } z-50`}
        >
          <h1 className="text-3xl primary-color m-4">TriciaSpeaks</h1>
          <ul className="p-8 text-2xl space-y-4">
            <li onClick={() => setNav(false)}>
              <a href="/">Home</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#About">About</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#Services">Services</a>
            </li>
            <li onClick={() => setNav(false)}>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
