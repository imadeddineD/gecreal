import React from 'react';
import { SlideLeft, SlideRight } from '../../utils/animate';
import {motion} from "framer-motion"

const Heroo = ({
    title , 
    subTit , 
    image
}) => {
  return (
    <div className="relative h-screen w-full">
      <img src={image} alt="Heroo Background" className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
      <div
           className="container mx-auto flex sm:flex-row flex-col justify-between px-0 mt-10">
          <motion.div variants={SlideRight(0.3)}
          initial="hidden"
          whileInView={"visible"} className="text-white space-y-6 max-w-lg mt-10">
          <div class=" text-[15px] font-[600] text-[#C5C5C5] flex gap-[13px]"><span className=' flex gap-[13px] justify-center items-center text-[#00BDFF] '>PAGE D&apos;ACCUEIL  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.60938 0.640625L7.60938 5.60156C7.84375 5.875 8 6.1875 8 6.5C8 6.77344 7.84375 7.125 7.60938 7.35938L2.60938 12.3203C2.25781 12.6719 1.71094 12.7891 1.24219 12.5938C0.773438 12.3984 0.5 12.0078 0.5 11.5V1.5C0.5 1.03125 0.773438 0.5625 1.24219 0.367188C1.71094 0.171875 2.25781 0.289062 2.60938 0.640625Z" fill="#00BDFF"/>
</svg>
</span><span>{subTit}</span></div>
            <h1 className="sm:text-[46px] text-[35px] font-[800]">{title}</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
          </motion.div>

          {/* Right Section (SVG Icon) */}
          <motion.div variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView={"visible"} className="w-[30%] sm:flex hidden items-center justify-center">
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

export default Heroo;
