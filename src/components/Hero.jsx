import React from 'react';
import hero from "../assets/img1.jpeg";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from '../utils/animate';

const Hero = () => {
  return (
    <div
    
    className="relative h-screen w-full">
      <img src={hero} alt="Hero Background" className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto flex sm:flex-row flex-col justify-between px-0 mt-10">
          <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView={"visible"}
           className="text-white space-y-6 max-w-lg mt-10">
            <h3 className="sm:text-[14px] text-[13px] font-[600] text-[#C5C5C5] uppercase">GEC International</h3>
            <h1 className="sm:text-[46px] text-[35px] font-[800]">La réhabilitation des conduites</h1>
            <p className="">
            À l&apos;heure des défis climatiques et de raréfaction de l&apos;eau, SPA GEC International regroupe des savoir-faire et des technologies à la fine pointe, autour d&apos;une approche intégrale permettant d&apos;assurer le plus bas coût possible la restauration des conduites et une longévité accrue des systèmes de canalisation, Tout en préservant une qualité optimale de l&apos;eau.            </p>
            <div className="flex sm:flex-row flex-col justify-start items-center  sm:gap-6 gap-3">
              <a
                href="/services"
                className=" h-[60px] sm:w-[220px] w-[180px] sm:rounded-[30px] rounded-[22px] flex justify-center items-center font-[600] uppercase text-[#06748A] bg-white hover:bg-[#00BDFF] cursor-pointer transition-all duration-200 ease-in "
              >
                Nos Services
              </a>
              <a
                href="/contact"
                className=" h-[60px] sm:w-[220px] w-[180px] sm:rounded-[30px] rounded-[22px] flex justify-center items-center font-[600] uppercase text-[white] bg-[#06748A] hover:bg-[#00BDFF] cursor-pointer transition-all duration-200 ease-in "
              >
                Contactez-nous
              </a>
            </div>
          </motion.div>

          {/* Right Section (SVG Icon) */}
          <motion.div  variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
          className="w-[30%] sm:flex hidden items-center justify-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer">
              <svg
                width="90"
                height="91"
                viewBox="0 0 90 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="90" height="90" rx="45" fill="#C5C5C5" />
                <path
                  d="M56.1777 43.0723C57.1348 43.6875 57.75 44.7812 57.75 45.875C57.75 47.0371 57.1348 48.1309 56.1777 48.6777L36.4902 60.709C35.4648 61.3242 34.166 61.3926 33.1406 60.7773C32.1152 60.2305 31.5 59.1367 31.5 57.9062V33.8438C31.5 32.6816 32.1152 31.5879 33.1406 31.041C34.166 30.4258 35.4648 30.4258 36.4902 31.1094L56.1777 43.0723Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
