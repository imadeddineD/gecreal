import React from 'react'
import "./Contact.css"
import { SlideUp } from '../../utils/animate'
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <section class="contacts">
    <motion.div variants={SlideUp(0.2)}
            initial="hidden"
            whileInView={"visible"} class="container">
        <div class="title">COLLABOREZ AVEC DES EXPERTS DES CANALISATIONS</div>
        <div class="button"><a href="/contact">CONTACTEZ-NOUS</a></div>
    </motion.div>
   </section>
  )
}

export default Contact