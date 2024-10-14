import React from 'react'
import "./Vision.css"
import { SlideUp } from '../../utils/animate'
import {motion} from "framer-motion"

const Vision = () => {
  return (
    <section class="vision">
        <div class="container">
            <motion.div variants={SlideUp(0.3)}
          initial="hidden"
          whileInView={"visible"} class="up">
                <p class="one">NOTRE VISION</p>
                <p class="two">NOUS VISONS GRAND, POUR DE MEILLEURS RÉSULTATS </p>
                <p class="three">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </motion.div>
            <motion.div variants={SlideUp(0.3)}
          initial="hidden"
          whileInView={"visible"}  class="down">
                <div class="left">
                    <div class="title">Nos missions</div>
                    <div class="cont">
                        <div class="cont1">
                            <div>
                                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.855 12.91C0.855 8.87333 1.57833 5.71167 3.025 3.425C4.495 1.13833 6.92167 -0.00500107 10.305 -0.00500107C13.6883 -0.00500107 16.1033 1.13833 17.55 3.425C19.02 5.71167 19.755 8.87333 19.755 12.91C19.755 16.97 19.02 20.155 17.55 22.465C16.1033 24.775 13.6883 25.93 10.305 25.93C6.92167 25.93 4.495 24.775 3.025 22.465C1.57833 20.155 0.855 16.97 0.855 12.91ZM14.925 12.91C14.925 11.1833 14.8083 9.73667 14.575 8.57C14.365 7.38 13.9217 6.41167 13.245 5.665C12.5917 4.91833 11.6117 4.545 10.305 4.545C8.99833 4.545 8.00667 4.91833 7.33 5.665C6.67667 6.41167 6.23333 7.38 6 8.57C5.79 9.73667 5.685 11.1833 5.685 12.91C5.685 14.6833 5.79 16.1767 6 17.39C6.21 18.58 6.65333 19.5483 7.33 20.295C8.00667 21.0183 8.99833 21.38 10.305 21.38C11.6117 21.38 12.6033 21.0183 13.28 20.295C13.9567 19.5483 14.4 18.58 14.61 17.39C14.82 16.1767 14.925 14.6833 14.925 12.91ZM22.887 5V0.484999H31.322V26H26.282V5H22.887Z" fill="#005D79"/>
                                </svg>    
                            </div>
                            <div>
                                <p>Innovation et Développement</p>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>
                        <div class="cont2">
                            <div>
                                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.855 12.91C0.855 8.87333 1.57833 5.71167 3.025 3.425C4.495 1.13833 6.92167 -0.00500107 10.305 -0.00500107C13.6883 -0.00500107 16.1033 1.13833 17.55 3.425C19.02 5.71167 19.755 8.87333 19.755 12.91C19.755 16.97 19.02 20.155 17.55 22.465C16.1033 24.775 13.6883 25.93 10.305 25.93C6.92167 25.93 4.495 24.775 3.025 22.465C1.57833 20.155 0.855 16.97 0.855 12.91ZM14.925 12.91C14.925 11.1833 14.8083 9.73667 14.575 8.57C14.365 7.38 13.9217 6.41167 13.245 5.665C12.5917 4.91833 11.6117 4.545 10.305 4.545C8.99833 4.545 8.00667 4.91833 7.33 5.665C6.67667 6.41167 6.23333 7.38 6 8.57C5.79 9.73667 5.685 11.1833 5.685 12.91C5.685 14.6833 5.79 16.1767 6 17.39C6.21 18.58 6.65333 19.5483 7.33 20.295C8.00667 21.0183 8.99833 21.38 10.305 21.38C11.6117 21.38 12.6033 21.0183 13.28 20.295C13.9567 19.5483 14.4 18.58 14.61 17.39C14.82 16.1767 14.925 14.6833 14.925 12.91ZM22.887 5V0.484999H31.322V26H26.282V5H22.887Z" fill="#005D79"/>
                                </svg>    
                            </div>
                            <div>
                                <p>Innovation et Développement</p>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>
                        <div class="cont3">
                            <div>
                                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.855 12.91C0.855 8.87333 1.57833 5.71167 3.025 3.425C4.495 1.13833 6.92167 -0.00500107 10.305 -0.00500107C13.6883 -0.00500107 16.1033 1.13833 17.55 3.425C19.02 5.71167 19.755 8.87333 19.755 12.91C19.755 16.97 19.02 20.155 17.55 22.465C16.1033 24.775 13.6883 25.93 10.305 25.93C6.92167 25.93 4.495 24.775 3.025 22.465C1.57833 20.155 0.855 16.97 0.855 12.91ZM14.925 12.91C14.925 11.1833 14.8083 9.73667 14.575 8.57C14.365 7.38 13.9217 6.41167 13.245 5.665C12.5917 4.91833 11.6117 4.545 10.305 4.545C8.99833 4.545 8.00667 4.91833 7.33 5.665C6.67667 6.41167 6.23333 7.38 6 8.57C5.79 9.73667 5.685 11.1833 5.685 12.91C5.685 14.6833 5.79 16.1767 6 17.39C6.21 18.58 6.65333 19.5483 7.33 20.295C8.00667 21.0183 8.99833 21.38 10.305 21.38C11.6117 21.38 12.6033 21.0183 13.28 20.295C13.9567 19.5483 14.4 18.58 14.61 17.39C14.82 16.1767 14.925 14.6833 14.925 12.91ZM22.887 5V0.484999H31.322V26H26.282V5H22.887Z" fill="#005D79"/>
                                </svg>    
                            </div>
                            <div>
                                <p>Innovation et Développement</p>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="up">“ Lorem ipsum dolor sit amet consectetur adipsing elit. “</div>
                    <div class="down">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
  )
}

export default Vision