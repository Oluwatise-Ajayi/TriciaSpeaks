import React from "react";
import heroimage from "../assets/channels4_profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-2 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className=" col-span-1 my-auto mx-auto w-full h-full lg:w-[400px] ">
        <img
          src={heroimage}
          class="w-full h-1/2  object-cover md:w-3/4 md:h-3/4 lg:w-3/4 lg:h-1/2"
          alt="hero"
        />
      </div>
      <div className="col-span-2 px-5 md:px-0">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold">
          <span className="primary-color">I'm a</span> <br />
          <TypeAnimation
            sequence={[
              "Content Creator",
              1000,
              "business owner",
              1000,
              "Community mod",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
            My name is Odun and i have dsbhf ewhfbwhb fehbhebehj wfw
        </p>
        <div className="my-8">
            <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"> Download CV</a>
            <a href="#contact" className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"> Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
