import React from "react";
import { FaTiktok, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold primary-color">TriciaSpeaks</h2>
        <p className="text-sm mt-2">Helping brands grow with impactful social media strategies.</p>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition">
            <FaTiktok size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="mailto:contact@triciaspeaks.com" className="hover:text-primary-color transition">
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-4">© {new Date().getFullYear()} TriciaSpeaks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
