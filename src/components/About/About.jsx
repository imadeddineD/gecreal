import React from 'react';
import about1 from "../../assets/about1.jpeg"
import about2 from "../../assets/about2.jpeg"
import about3 from "../../assets/about3.jpeg"
import "./About.css"
import { SlideDown, SlideUp } from '../../utils/animate';
import { motion } from "framer-motion";
import contactmg from "../../assets/contact.jpeg"


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
                {/* <div class="two">LOREM IPSUM  dolor sit amet</div> */}
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
            class="lower"
            >
                <div class="talks">
                    <img src={contactmg} alt="" class="imagcontact" />
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
