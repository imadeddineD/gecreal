import React from 'react';
import about1 from "../../assets/about1.jpeg"
import about2 from "../../assets/about2.jpeg"
import about3 from "../../assets/about3.jpeg"
import "./About.css"
import { SlideDown, SlideUp } from '../../utils/animate';
import { motion } from "framer-motion";


const About = () => {
  return (
    <section class="about">
        <div class="container">
            <motion.div 
            variants={SlideDown(0.2)}
          initial="hidden"
          whileInView={"visible"}
          class="upper">
                <div class="one">QUI SOMMES-NOUS ?</div>
                <div class="two">LOREM IPSUM  dolor sit amet</div>
                <div class="three">
                    <span><a href="/contact">CONTACTEZ-NOUS</a></span>
                    <span>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1094 9.39844L10.8594 15.6484C10.625 15.8828 10.3125 16 10 16C9.64844 16 9.33594 15.8828 9.10156 15.6484C8.59375 15.1797 8.59375 14.3594 9.10156 13.8906L13.2031 9.75H1.25C0.546875 9.75 0 9.20312 0 8.5C0 7.83594 0.546875 7.25 1.25 7.25H13.2031L9.10156 3.14844C8.59375 2.67969 8.59375 1.85938 9.10156 1.39062C9.57031 0.882812 10.3906 0.882812 10.8594 1.39062L17.1094 7.64062C17.6172 8.10938 17.6172 8.92969 17.1094 9.39844Z" fill="#707070"/>
                        </svg>                            
                    </span>
                </div>
            </motion.div>
            <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            class="lower">
                <div class="talks">
                    <div>
                        <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.4375 11.3125C13.0957 11.3125 16.875 15.0918 16.875 19.75C16.875 24.4961 13.0957 28.1875 8.4375 28.1875C3.69141 28.1875 0 24.4961 0 19.75V11.3125C0 5.16016 5.00977 0.0625 11.25 0.0625C12.7441 0.0625 14.0625 1.38086 14.0625 2.875C14.0625 4.45703 12.7441 5.6875 11.25 5.6875C8.08594 5.6875 5.625 8.23633 5.625 11.3125V11.8398C6.50391 11.5762 7.38281 11.3125 8.4375 11.3125ZM30.9375 11.3125C35.5957 11.3125 39.375 15.0918 39.375 19.75C39.375 24.4961 35.5957 28.1875 30.9375 28.1875C26.1914 28.1875 22.5 24.4961 22.5 19.75V11.3125C22.5 5.16016 27.5098 0.0625 33.75 0.0625C35.2441 0.0625 36.5625 1.38086 36.5625 2.875C36.5625 4.45703 35.2441 5.6875 33.75 5.6875C30.5859 5.6875 28.125 8.23633 28.125 11.3125V11.8398C29.0039 11.5762 29.8828 11.3125 30.9375 11.3125Z" fill="#DADADA"/>
                        </svg>
                    </div>
                    <div class="caption">“ Lorem ipsum dolor sit amet consectetur adipsing elit. “</div>
                    <div>Mr. Med Abach</div>
                </div>
                <div class="scroll">
                    <div><img src={about1} alt="ABOUT1"/></div>
                    <div><img src={about2} alt="ABOUT2"/></div>
                    <div><img src={about3} alt="ABOUT3"/></div>
                </div>
            </motion.div>
        </div>
    </section>
    
  );
};

export default About;
