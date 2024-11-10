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
                                
                            </div>
                        </div>
                        <div class="cont2">
                            <div>
                            <svg width="41" height="27" viewBox="0 0 41 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.855 13.91C0.855 9.87333 1.57833 6.71167 3.025 4.425C4.495 2.13833 6.92167 0.994999 10.305 0.994999C13.6883 0.994999 16.1033 2.13833 17.55 4.425C19.02 6.71167 19.755 9.87333 19.755 13.91C19.755 17.97 19.02 21.155 17.55 23.465C16.1033 25.775 13.6883 26.93 10.305 26.93C6.92167 26.93 4.495 25.775 3.025 23.465C1.57833 21.155 0.855 17.97 0.855 13.91ZM14.925 13.91C14.925 12.1833 14.8083 10.7367 14.575 9.57C14.365 8.38 13.9217 7.41167 13.245 6.665C12.5917 5.91833 11.6117 5.545 10.305 5.545C8.99833 5.545 8.00667 5.91833 7.33 6.665C6.67667 7.41167 6.23333 8.38 6 9.57C5.79 10.7367 5.685 12.1833 5.685 13.91C5.685 15.6833 5.79 17.1767 6 18.39C6.21 19.58 6.65333 20.5483 7.33 21.295C8.00667 22.0183 8.99833 22.38 10.305 22.38C11.6117 22.38 12.6033 22.0183 13.28 21.295C13.9567 20.5483 14.4 19.58 14.61 18.39C14.82 17.1767 14.925 15.6833 14.925 13.91ZM25.022 21.47C27.262 19.6033 29.047 18.0517 30.377 16.815C31.707 15.555 32.8153 14.2483 33.702 12.895C34.5886 11.5417 35.032 10.2117 35.032 8.905C35.032 7.715 34.752 6.78167 34.192 6.105C33.632 5.42833 32.7686 5.09 31.602 5.09C30.4353 5.09 29.537 5.48667 28.907 6.28C28.277 7.05 27.9503 8.11167 27.927 9.465H23.167C23.2603 6.665 24.0886 4.54167 25.652 3.095C27.2386 1.64833 29.2453 0.924998 31.672 0.924998C34.332 0.924998 36.3736 1.63666 37.797 3.06C39.2203 4.46 39.932 6.315 39.932 8.625C39.932 10.445 39.442 12.1833 38.462 13.84C37.482 15.4967 36.362 16.9433 35.102 18.18C33.842 19.3933 32.197 20.8633 30.167 22.59H40.492V26.65H23.202V23.01L25.022 21.47Z" fill="#005D79"/>
</svg>    
                            </div>
                            <div>
                                <p>Excellence Opérationnelle</p>
                                
                            </div>
                        </div>
                        <div class="cont3">
                            <div>
                            <svg width="41" height="28" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.855 13.91C0.855 9.87333 1.57833 6.71167 3.025 4.425C4.495 2.13833 6.92167 0.994999 10.305 0.994999C13.6883 0.994999 16.1033 2.13833 17.55 4.425C19.02 6.71167 19.755 9.87333 19.755 13.91C19.755 17.97 19.02 21.155 17.55 23.465C16.1033 25.775 13.6883 26.93 10.305 26.93C6.92167 26.93 4.495 25.775 3.025 23.465C1.57833 21.155 0.855 17.97 0.855 13.91ZM14.925 13.91C14.925 12.1833 14.8083 10.7367 14.575 9.57C14.365 8.38 13.9217 7.41167 13.245 6.665C12.5917 5.91833 11.6117 5.545 10.305 5.545C8.99833 5.545 8.00667 5.91833 7.33 6.665C6.67667 7.41167 6.23333 8.38 6 9.57C5.79 10.7367 5.685 12.1833 5.685 13.91C5.685 15.6833 5.79 17.1767 6 18.39C6.21 19.58 6.65333 20.5483 7.33 21.295C8.00667 22.0183 8.99833 22.38 10.305 22.38C11.6117 22.38 12.6033 22.0183 13.28 21.295C13.9567 20.5483 14.4 19.58 14.61 18.39C14.82 17.1767 14.925 15.6833 14.925 13.91ZM23.552 8.205C23.6686 5.87167 24.4853 4.075 26.002 2.815C27.542 1.53166 29.5603 0.889998 32.057 0.889998C33.7603 0.889998 35.2186 1.19333 36.432 1.8C37.6453 2.38333 38.5553 3.18833 39.162 4.215C39.792 5.21833 40.107 6.36167 40.107 7.645C40.107 9.115 39.722 10.3633 38.952 11.39C38.2053 12.3933 37.307 13.07 36.257 13.42V13.56C37.6103 13.98 38.6603 14.7267 39.407 15.8C40.177 16.8733 40.562 18.25 40.562 19.93C40.562 21.33 40.2353 22.5783 39.582 23.675C38.952 24.7717 38.007 25.635 36.747 26.265C35.5103 26.8717 34.017 27.175 32.267 27.175C29.6303 27.175 27.4836 26.51 25.827 25.18C24.1703 23.85 23.2953 21.89 23.202 19.3H27.962C28.0086 20.4433 28.3936 21.365 29.117 22.065C29.8636 22.7417 30.8786 23.08 32.162 23.08C33.352 23.08 34.262 22.7533 34.892 22.1C35.5453 21.4233 35.872 20.56 35.872 19.51C35.872 18.11 35.4286 17.1067 34.542 16.5C33.6553 15.8933 32.2786 15.59 30.412 15.59H29.397V11.565H30.412C33.7253 11.565 35.382 10.4567 35.382 8.24C35.382 7.23667 35.0786 6.455 34.472 5.895C33.8886 5.335 33.037 5.055 31.917 5.055C30.8203 5.055 29.9686 5.35833 29.362 5.965C28.7786 6.54833 28.4403 7.295 28.347 8.205H23.552Z" fill="#005D79"/>
</svg>  
                            </div>
                            <div>
                                <p>Satisfaction Client</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="right">
                    <div class="up">“ Lorem ipsum dolor sit amet consectetur adipsing elit. “</div>
                    <div class="down">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div> */}
            </motion.div>
        </div>
      </section>
  )
}

export default Vision