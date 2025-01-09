import React from "react";
import youtube from "../assets/YouTube-YouTube-1.png";
import degen from "../assets/Degen-graphic.png";

const Skills = () => {
  return (
    <div className=" border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center pl-6">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4 ">
        My <br /> Creative <br /> Skills
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={youtube} alt=""/>
        <p className="mt-2 text-sm">YOUTUBE</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={degen} alt="" width={100} height={100}/>
        <p className="mt-2 text-sm">DEGEN</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={youtube} alt="" width={100} height={100}/>
        <p className="mt-2 text-sm">YOUTUBE</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={degen} alt="" width={100} height={100}/>
        <p className="mt-2 text-sm">DEGEN</p>
      </div>
    </div>
  );
};

export default Skills;
