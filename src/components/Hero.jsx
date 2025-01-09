import React from "react";
import heroimage from "../assets/channels4_profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black">
      <div className=" col-span-1 my-auto mx-auto w-full h-full lg:w-[400px] ">
        <img src={heroimage} class="w-full h-1/2  object-cover md:w-3/4 md:h-3/4 lg:w-3/4 lg:h-1/2"alt="hero" />
      </div>
      <div className="col-span-2 px-5">

      <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
        <span className="text-aqua-200">
            I'm a
        </span> <br/>
        <TypeAnimation
            sequence={[
                "Content Creator",
                1000,
                "business owner",
                1000,
                "Community moderator",
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
      </h1>
      </div>
    </div>
  );
};

export default Hero;
