import React from 'react'
import "./Ourwork.css"
import one from '../../assets/one.jpeg'
import two from '../../assets/two.jpeg'
import three from '../../assets/three.jpeg'
import four from '../../assets/fout.jpeg'
import five from '../../assets/five.jpeg'
import six from '../../assets/six.jpeg'
import { SlideLeft, SlideUp } from '../../utils/animate'
import {motion } from "framer-motion"

const Ourwork = () => {
  return (
    <section class="ourwork">
        <div class="container">
            <motion.div 
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            class="upper">
                <div>DÉCOUVREZ NOS TRAVAUX</div>
                <div>NOS TRAVAUX</div>
            </motion.div>
            <div class="down">
                <motion.div variants={SlideLeft(0.1)}
            initial="hidden"
            whileInView={"visible"} class="one">
                    <img src={one} alt="ONE"/>
                    <div>
                        <div class="tit">Réhabilitations de canalisations</div>
                        
                    </div>
                </motion.div>
                <motion.div variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView={"visible"} class="two">
                    <img src={two} alt="TWO"/>
                    <div>
                        <div class="tit">Réhabilitations </div>
                        
                    </div>
                </motion.div>
                <motion.div variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView={"visible"} class="three">
                    <img src={three} alt="THREE"/>
                    <div>
                        <div class="tit">Réhabilitations </div>
                        
                    </div>
                </motion.div>
                <motion.div variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView={"visible"} class="four">
                    <img src={four} alt="FOUR"/>
                    <div>
                        <div class="tit">Réhabilitations </div>
                        
                    </div>
                </motion.div>
                <motion.div variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"} class="five">
                    <img src={five} alt="FIVE"/>
                    <div>
                        <div class="tit">Réhabilitations </div>
                        
                    </div>
                </motion.div>
                <motion.div variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView={"visible"} class="six">
                    <img src={six} alt="SIX"/>
                    <div>
                        <div class="tit">Réhabilitations </div>
                        
                    </div>
                </motion.div>
            </div>
            <div class="downer">
                <span>
                    <span>DÉCOUVREZ</span><span>NOS TRAVEAUX</span>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Ourwork