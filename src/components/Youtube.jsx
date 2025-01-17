import React from "react";
import Vid1 from '../assets/proj1.png';
import Vid2 from '../assets/proj2.png';
import Vid3 from '../assets/proj3.png';
import Vid4 from '../assets/proj4.png';
import Vid5 from '../assets/proj5.png';
import Vid6 from '../assets/proj6.png';
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";

const Youtube = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="Youtube">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Content Creation</p>
        <p className="text-gray-400"> Check out some of my recent work</p>
      </div>

      <div className=" border border-gray-700 mb-3 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4 place-items-center md:flex md:justify-between md:items-center pl-6">
        <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4 ">
          STATS
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <BsPersonFillCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <p className="mt-2 text-sm mb-1 font-bold ">543</p>
          <p className="mt-2 text-sm">SUSCRIBERS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <MdVideoLibrary className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <p className="mt-2 text-sm mb-1 font-bold ">166</p>
          <p className="mt-2 text-sm">VIDEOS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <FaArrowTrendUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <p className="mt-2 text-sm mb-1 font-bold ">65,570</p>
          <p className="mt-2 text-sm">VIEWS</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Vid1} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.youtube.com/watch?v=_Dt_UdxBjKM"  target="_blank"
          rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Watch
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Vid2} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.youtube.com/watch?v=HzZDgtlaQTY"  target="_blank"
          rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Watch
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Vid3} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.youtube.com/watch?v=gUqZCoe57jw"  target="_blank"
          rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Watch
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Vid4} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.youtube.com/watch?v=IC3JwUl44Ik"  target="_blank"
          rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Watch
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Vid5} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.youtube.com/watch?v=3nrZ6azcS3g"  target="_blank"
          rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Watch
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
          <img src={Vid6} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider ">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.youtube.com/watch?v=gXf6RWS5GtE"  target="_blank"
          rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Watch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
