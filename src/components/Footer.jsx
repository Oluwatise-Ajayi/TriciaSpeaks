import React from "react";
import {
  FaYoutube,
  FaInstagramSquare,
  FaTiktok,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 p-12">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold primary-color">Odun</span>
        </div>
        <div className="flex items-center justify-end sm:flex-wrap md:flex-nowrap">
          <a
            href="https://www.youtube.com/@lexballer205"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/lexballer205/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.tiktok.com/@lexballer205?_t=ZM-8t8gh9NHBos&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTiktok />
          </a>
          <a
            href="https://t.me/lexballer_205"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://x.com/@lballer205"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://web.facebook.com/lexballer205"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
