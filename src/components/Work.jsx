import React from "react";
import Youtube from "./Youtube";
import Mod from "./Mod";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5">
     <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">WORKS</p>
      </div>
      <Youtube />
      <Mod/>
    </div>
  );
};

export default Work;
