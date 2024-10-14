import React from 'react'
import "./Howwork.css"
import { SlideLeft, SlideUp } from '../../utils/animate'
import {motion} from "framer-motion"

const Howwork = () => {
  return (
    <section class="process">
    <div class="container">
    <motion.div variants={SlideUp(0.3)}
          initial="hidden"
          whileInView={"visible"} class="up">
            <div class="one">COMMENT ON TRAVAILLE ?</div>
            <div class="two">NOTRE PROCESSUS EN 4 ÉTAPES</div>
        </motion.div>
        <div class="down">
        <motion.div variants={SlideLeft(0.1)}
          initial="hidden"
          whileInView={"visible"}>
                <div class="one">
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.951192 12.91C0.951192 8.87333 1.67452 5.71167 3.12119 3.425C4.59119 1.13833 7.01786 -0.00500107 10.4012 -0.00500107C13.7845 -0.00500107 16.1995 1.13833 17.6462 3.425C19.1162 5.71167 19.8512 8.87333 19.8512 12.91C19.8512 16.97 19.1162 20.155 17.6462 22.465C16.1995 24.775 13.7845 25.93 10.4012 25.93C7.01786 25.93 4.59119 24.775 3.12119 22.465C1.67452 20.155 0.951192 16.97 0.951192 12.91ZM15.0212 12.91C15.0212 11.1833 14.9045 9.73667 14.6712 8.57C14.4612 7.38 14.0179 6.41167 13.3412 5.665C12.6879 4.91833 11.7079 4.545 10.4012 4.545C9.09453 4.545 8.10286 4.91833 7.42619 5.665C6.77286 6.41167 6.32952 7.38 6.09619 8.57C5.88619 9.73667 5.78119 11.1833 5.78119 12.91C5.78119 14.6833 5.88619 16.1767 6.09619 17.39C6.30619 18.58 6.74952 19.5483 7.42619 20.295C8.10286 21.0183 9.09453 21.38 10.4012 21.38C11.7079 21.38 12.6995 21.0183 13.3762 20.295C14.0529 19.5483 14.4962 18.58 14.7062 17.39C14.9162 16.1767 15.0212 14.6833 15.0212 12.91ZM22.9831 5V0.484999H31.4181V26H26.3781V5H22.9831Z" fill="#C5C5C5"/>
                    </svg>
                </div>
                <div class="two">Évaluation et Planification</div>
                <div class="three">Lorem ipsum dolor sit amet consectetur adip</div>
            </motion.div>
            <motion.div variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView={"visible"}>
                <div class="one">
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.951192 12.91C0.951192 8.87333 1.67452 5.71167 3.12119 3.425C4.59119 1.13833 7.01786 -0.00500107 10.4012 -0.00500107C13.7845 -0.00500107 16.1995 1.13833 17.6462 3.425C19.1162 5.71167 19.8512 8.87333 19.8512 12.91C19.8512 16.97 19.1162 20.155 17.6462 22.465C16.1995 24.775 13.7845 25.93 10.4012 25.93C7.01786 25.93 4.59119 24.775 3.12119 22.465C1.67452 20.155 0.951192 16.97 0.951192 12.91ZM15.0212 12.91C15.0212 11.1833 14.9045 9.73667 14.6712 8.57C14.4612 7.38 14.0179 6.41167 13.3412 5.665C12.6879 4.91833 11.7079 4.545 10.4012 4.545C9.09453 4.545 8.10286 4.91833 7.42619 5.665C6.77286 6.41167 6.32952 7.38 6.09619 8.57C5.88619 9.73667 5.78119 11.1833 5.78119 12.91C5.78119 14.6833 5.88619 16.1767 6.09619 17.39C6.30619 18.58 6.74952 19.5483 7.42619 20.295C8.10286 21.0183 9.09453 21.38 10.4012 21.38C11.7079 21.38 12.6995 21.0183 13.3762 20.295C14.0529 19.5483 14.4962 18.58 14.7062 17.39C14.9162 16.1767 15.0212 14.6833 15.0212 12.91ZM22.9831 5V0.484999H31.4181V26H26.3781V5H22.9831Z" fill="#C5C5C5"/>
                    </svg>
                </div>
                <div class="two">Évaluation et Planification</div>
                <div class="three">Lorem ipsum dolor sit amet consectetur adip</div>
            </motion.div>
            <motion.div variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}>
                <div class="one">
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.951192 12.91C0.951192 8.87333 1.67452 5.71167 3.12119 3.425C4.59119 1.13833 7.01786 -0.00500107 10.4012 -0.00500107C13.7845 -0.00500107 16.1995 1.13833 17.6462 3.425C19.1162 5.71167 19.8512 8.87333 19.8512 12.91C19.8512 16.97 19.1162 20.155 17.6462 22.465C16.1995 24.775 13.7845 25.93 10.4012 25.93C7.01786 25.93 4.59119 24.775 3.12119 22.465C1.67452 20.155 0.951192 16.97 0.951192 12.91ZM15.0212 12.91C15.0212 11.1833 14.9045 9.73667 14.6712 8.57C14.4612 7.38 14.0179 6.41167 13.3412 5.665C12.6879 4.91833 11.7079 4.545 10.4012 4.545C9.09453 4.545 8.10286 4.91833 7.42619 5.665C6.77286 6.41167 6.32952 7.38 6.09619 8.57C5.88619 9.73667 5.78119 11.1833 5.78119 12.91C5.78119 14.6833 5.88619 16.1767 6.09619 17.39C6.30619 18.58 6.74952 19.5483 7.42619 20.295C8.10286 21.0183 9.09453 21.38 10.4012 21.38C11.7079 21.38 12.6995 21.0183 13.3762 20.295C14.0529 19.5483 14.4962 18.58 14.7062 17.39C14.9162 16.1767 15.0212 14.6833 15.0212 12.91ZM22.9831 5V0.484999H31.4181V26H26.3781V5H22.9831Z" fill="#C5C5C5"/>
                    </svg>
                </div>
                <div class="two">Évaluation et Planification</div>
                <div class="three">Lorem ipsum dolor sit amet consectetur adip</div>
            </motion.div>
            <motion.div variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView={"visible"}>
                <div class="one">
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.951192 12.91C0.951192 8.87333 1.67452 5.71167 3.12119 3.425C4.59119 1.13833 7.01786 -0.00500107 10.4012 -0.00500107C13.7845 -0.00500107 16.1995 1.13833 17.6462 3.425C19.1162 5.71167 19.8512 8.87333 19.8512 12.91C19.8512 16.97 19.1162 20.155 17.6462 22.465C16.1995 24.775 13.7845 25.93 10.4012 25.93C7.01786 25.93 4.59119 24.775 3.12119 22.465C1.67452 20.155 0.951192 16.97 0.951192 12.91ZM15.0212 12.91C15.0212 11.1833 14.9045 9.73667 14.6712 8.57C14.4612 7.38 14.0179 6.41167 13.3412 5.665C12.6879 4.91833 11.7079 4.545 10.4012 4.545C9.09453 4.545 8.10286 4.91833 7.42619 5.665C6.77286 6.41167 6.32952 7.38 6.09619 8.57C5.88619 9.73667 5.78119 11.1833 5.78119 12.91C5.78119 14.6833 5.88619 16.1767 6.09619 17.39C6.30619 18.58 6.74952 19.5483 7.42619 20.295C8.10286 21.0183 9.09453 21.38 10.4012 21.38C11.7079 21.38 12.6995 21.0183 13.3762 20.295C14.0529 19.5483 14.4962 18.58 14.7062 17.39C14.9162 16.1767 15.0212 14.6833 15.0212 12.91ZM22.9831 5V0.484999H31.4181V26H26.3781V5H22.9831Z" fill="#C5C5C5"/>
                    </svg>
                </div>
                <div class="two">Évaluation et Planification</div>
                <div class="three">Lorem ipsum dolor sit amet consectetur adip</div>
            </motion.div>
        </div>
    </div>
   </section>
  )
}

export default Howwork