import React from 'react'
import "./Map.css"
import { SlideUp } from '../../utils/animate'
import {motion} from "framer-motion"

const Map = () => {
  return (
    <motion.section variants={SlideUp(0.3)}
    initial="hidden"
    whileInView={"visible"} class="contacts">
        <div class="container">
            <div>
                
            </div>
        </div>
    </motion.section>
  )
}

export default Map