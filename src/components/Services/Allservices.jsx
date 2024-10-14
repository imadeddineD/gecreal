import React from 'react'
import "./Services.css"
import { SlideLeft, SlideUp } from '../../utils/animate'
import {motion} from "framer-motion"

const Allservices = () => {
  return (
    <section class="service">
        <div class="container">
        <motion.div 
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView={"visible"} class="up"> 
                <p class="desc">QUE FAISONS NOUS ?</p>
                <p class="title">NOS SERVICES</p>
            </motion.div>
            <div className='main'>
               <motion.div 
                variants={SlideLeft(0.2)}
                initial="hidden"
                whileInView={"visible"}
                  class="card">
                    <div class="icon">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.1042 9.0625C31.1042 10.3809 30.7526 11.5234 30.3132 12.666L34.9714 20.6641C32.862 22.8613 30.1374 24.5312 27.1491 25.3223L22.6667 17.5H22.5788L16.6022 27.8711C18.5358 28.4863 20.5573 28.75 22.6667 28.75C28.819 28.75 34.3561 25.9375 37.9597 21.3672C38.9265 20.2246 40.7722 19.9609 41.9147 20.9277C43.1452 21.9824 43.321 23.7402 42.3542 24.8828C37.7839 30.6836 30.5768 34.375 22.6667 34.375C19.5026 34.375 16.5143 33.8477 13.7897 32.793L8.77997 41.4062C8.34052 42.1094 7.72528 42.7246 7.02216 43.0762L2.18817 45.5371C1.74872 45.7129 1.22137 45.7129 0.781921 45.4492C0.342468 45.1855 0.166687 44.7461 0.166687 44.2188V39.3848C0.166687 38.6816 0.342468 37.8906 0.694031 37.2754L5.96747 28.1348C4.82489 27.168 3.7702 26.1133 2.8913 24.8828C1.9245 23.7402 2.10028 21.9824 3.33075 20.9277C4.47333 19.9609 6.31903 20.2246 7.28583 21.3672C7.72528 22.0703 8.25262 22.5977 8.86786 23.2129L14.9323 12.666C14.4929 11.5234 14.2292 10.3809 14.2292 9.0625C14.2292 4.4043 17.9206 0.625 22.6667 0.625C27.3249 0.625 31.1042 4.4043 31.1042 9.0625ZM22.6667 11.875C24.1608 11.875 25.4792 10.6445 25.4792 9.0625C25.4792 7.56836 24.1608 6.25 22.6667 6.25C21.0847 6.25 19.8542 7.56836 19.8542 9.0625C19.8542 10.6445 21.0847 11.875 22.6667 11.875ZM32.862 35.2539C35.7624 34.1992 38.3991 32.6172 40.6843 30.5957L44.5515 37.2754C44.903 37.8906 45.1667 38.6816 45.1667 39.3848V44.2188C45.1667 44.7461 44.903 45.1855 44.4636 45.4492C44.0241 45.7129 43.4968 45.7129 43.0573 45.5371L38.2233 43.0762C37.5202 42.7246 36.905 42.1094 36.4655 41.4062L32.862 35.2539Z" fill="#C5C5C5"/>
                        </svg>                            
                    </div>
                    <div class="title">Inspection Du Réseau</div>
                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
                    <div class="button"><a href="/services/service">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.3)}
                initial="hidden"
                whileInView={"visible"} class="card">
                    <div class="icon">
                        <svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.2246 23.125C51.2246 24.707 49.9063 25.9375 48.4121 25.9375H45.5996L45.6875 40C45.6875 40.2637 45.6875 40.5273 45.6875 40.7031V42.1094C45.6875 44.1309 44.1055 45.625 42.1719 45.625H40.7656C40.5899 45.625 40.502 45.625 40.4141 45.625C40.3262 45.625 40.1504 45.625 40.0625 45.625H35.1406C33.1192 45.625 31.625 44.1309 31.625 42.1094V34.375C31.625 32.8809 30.3067 31.5625 28.8125 31.5625H23.1875C21.6055 31.5625 20.375 32.8809 20.375 34.375V42.1094C20.375 44.1309 18.793 45.625 16.8594 45.625H11.9375C11.7617 45.625 11.6738 45.625 11.4981 45.625C11.4102 45.625 11.3223 45.625 11.2344 45.625H9.82814C7.80666 45.625 6.31252 44.1309 6.31252 42.1094V32.2656C6.31252 32.2656 6.31252 32.1777 6.31252 32.0898V25.9375H3.50002C1.91798 25.9375 0.687515 24.707 0.687515 23.125C0.687515 22.334 0.951187 21.6309 1.56642 21.0156L24.0664 1.41602C24.6817 0.800781 25.3848 0.625 26 0.625C26.6152 0.625 27.3184 0.888672 27.8457 1.32812L50.2578 21.0156C50.961 21.6309 51.3125 22.334 51.2246 23.125Z" fill="#C5C5C5"/>
                        </svg>                            
                    </div>
                    <div class="title">Nettoyage Des Canalisations</div>
                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
                    <div class="button"><a href="/services/service">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.4)}
                initial="hidden"
                whileInView={"visible"} class="card">
                    <div class="icon">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833313 6.25C0.833313 3.17383 3.29425 0.625 6.45831 0.625H31.7708C34.847 0.625 37.3958 3.17383 37.3958 6.25V11.875C37.3958 15.0391 34.847 17.5 31.7708 17.5H6.45831C3.29425 17.5 0.833313 15.0391 0.833313 11.875V6.25ZM14.8958 31.5625C14.8958 30.0684 16.1263 28.75 17.7083 28.75V27.3438C17.7083 23.4766 20.7845 20.3125 24.7396 20.3125H37.3958C38.89 20.3125 40.2083 19.082 40.2083 17.5V6.77734C43.4603 7.91992 45.8333 11.084 45.8333 14.6875V17.5C45.8333 22.1582 42.054 25.9375 37.3958 25.9375H24.7396C23.9485 25.9375 23.3333 26.6406 23.3333 27.3438V28.75C24.8275 28.75 26.1458 30.0684 26.1458 31.5625V42.8125C26.1458 44.3945 24.8275 45.625 23.3333 45.625H17.7083C16.1263 45.625 14.8958 44.3945 14.8958 42.8125V31.5625Z" fill="#C5C5C5"/>
                        </svg>                                                      
                    </div>
                    <div class="title">Inspection Du Réseau</div>
                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
                    <div class="button"><a href="/services/service">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.4)}
                initial="hidden"
                whileInView={"visible"} class="card">
                    <div class="icon">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833313 6.25C0.833313 3.17383 3.29425 0.625 6.45831 0.625H31.7708C34.847 0.625 37.3958 3.17383 37.3958 6.25V11.875C37.3958 15.0391 34.847 17.5 31.7708 17.5H6.45831C3.29425 17.5 0.833313 15.0391 0.833313 11.875V6.25ZM14.8958 31.5625C14.8958 30.0684 16.1263 28.75 17.7083 28.75V27.3438C17.7083 23.4766 20.7845 20.3125 24.7396 20.3125H37.3958C38.89 20.3125 40.2083 19.082 40.2083 17.5V6.77734C43.4603 7.91992 45.8333 11.084 45.8333 14.6875V17.5C45.8333 22.1582 42.054 25.9375 37.3958 25.9375H24.7396C23.9485 25.9375 23.3333 26.6406 23.3333 27.3438V28.75C24.8275 28.75 26.1458 30.0684 26.1458 31.5625V42.8125C26.1458 44.3945 24.8275 45.625 23.3333 45.625H17.7083C16.1263 45.625 14.8958 44.3945 14.8958 42.8125V31.5625Z" fill="#C5C5C5"/>
                        </svg>                                                      
                    </div>
                    <div class="title">Inspection Du Réseau</div>
                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
                    <div class="button"><a href="/services/service">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView={"visible"}  class="card">
                    <div class="icon">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833313 6.25C0.833313 3.17383 3.29425 0.625 6.45831 0.625H31.7708C34.847 0.625 37.3958 3.17383 37.3958 6.25V11.875C37.3958 15.0391 34.847 17.5 31.7708 17.5H6.45831C3.29425 17.5 0.833313 15.0391 0.833313 11.875V6.25ZM14.8958 31.5625C14.8958 30.0684 16.1263 28.75 17.7083 28.75V27.3438C17.7083 23.4766 20.7845 20.3125 24.7396 20.3125H37.3958C38.89 20.3125 40.2083 19.082 40.2083 17.5V6.77734C43.4603 7.91992 45.8333 11.084 45.8333 14.6875V17.5C45.8333 22.1582 42.054 25.9375 37.3958 25.9375H24.7396C23.9485 25.9375 23.3333 26.6406 23.3333 27.3438V28.75C24.8275 28.75 26.1458 30.0684 26.1458 31.5625V42.8125C26.1458 44.3945 24.8275 45.625 23.3333 45.625H17.7083C16.1263 45.625 14.8958 44.3945 14.8958 42.8125V31.5625Z" fill="#C5C5C5"/>
                        </svg>                                                      
                    </div>
                    <div class="title">Inspection Du Réseau</div>
                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
                    <div class="button"><a href="/services/service">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.6)}
                initial="hidden"
                whileInView={"visible"} class="card">
                    <div class="icon">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833313 6.25C0.833313 3.17383 3.29425 0.625 6.45831 0.625H31.7708C34.847 0.625 37.3958 3.17383 37.3958 6.25V11.875C37.3958 15.0391 34.847 17.5 31.7708 17.5H6.45831C3.29425 17.5 0.833313 15.0391 0.833313 11.875V6.25ZM14.8958 31.5625C14.8958 30.0684 16.1263 28.75 17.7083 28.75V27.3438C17.7083 23.4766 20.7845 20.3125 24.7396 20.3125H37.3958C38.89 20.3125 40.2083 19.082 40.2083 17.5V6.77734C43.4603 7.91992 45.8333 11.084 45.8333 14.6875V17.5C45.8333 22.1582 42.054 25.9375 37.3958 25.9375H24.7396C23.9485 25.9375 23.3333 26.6406 23.3333 27.3438V28.75C24.8275 28.75 26.1458 30.0684 26.1458 31.5625V42.8125C26.1458 44.3945 24.8275 45.625 23.3333 45.625H17.7083C16.1263 45.625 14.8958 44.3945 14.8958 42.8125V31.5625Z" fill="#C5C5C5"/>
                        </svg>                                                      
                    </div>
                    <div class="title">Inspection Du Réseau</div>
                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
                    <div class="button"><a href="/services/service">EN SAVOIR PLUS</a></div>
                </motion.div>
            </div>
            <div class="down">
                <span>
                    <span>DÉCOUVREZ</span><span><a href="/services">NOS SERVICES</a></span>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Allservices