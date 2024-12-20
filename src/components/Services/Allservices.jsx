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
                    <div class="desc">Nos ingénieurs réalisent un diagnostic approfondi en collaboration avec les entreprises et autorités pour identifier les actions nécessaires.</div>
                    <div class="button"><a href="/services">EN SAVOIR PLUS</a></div>
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
                    <div class="desc">La téléinspection de "GEC International" identifie avec précision les défauts des canalisations via un rapport vidéo détaillé.</div>
                    <div class="button"><a href="/services">EN SAVOIR PLUS</a></div>
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
                    <div class="desc">Nous restaurons la capacité des conduits par des méthodes de nettoyage variées : hydrodynamique, fraise hydraulique, hydro cavitation et techniques mécaniques.</div>
                    <div class="button"><a href="/services">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.4)}
                initial="hidden"
                whileInView={"visible"} class="card">
                    <div class="icon">
                    <svg width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6665 0.125C22.0181 0.125 22.4575 0.300781 22.8091 0.388672L39.3325 7.41992C41.2661 8.29883 42.7603 10.1445 42.7603 12.4297C42.6724 21.2188 39.0688 37.127 23.9517 44.4219C22.4575 45.125 20.7876 45.125 19.2935 44.4219C4.17627 37.127 0.572754 21.2188 0.484863 12.4297C0.484863 10.1445 1.979 8.29883 3.9126 7.41992L20.436 0.388672C20.7876 0.300781 21.2271 0.125 21.6665 0.125ZM21.6665 39.2363C33.7075 33.3477 37.0474 20.4277 37.1353 12.6055L21.6665 6.01367V39.2363Z" fill="#005D79"/>
</svg>                                                    
                    </div>
                    <div class="title">Réhabilitation des canalisations</div>
                    <div class="desc">Notre procédé de gaines polymères restaure l'étanchéité et renforce la canalisation pour une durabilité jusqu'à 50 ans.</div>
                    <div class="button"><a href="/services">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView={"visible"}  class="card">
                    <div class="icon">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.6875 0.625C44.1816 0.625 45.5 1.94336 45.5 3.4375C45.5 5.01953 44.1816 6.25 42.6875 6.25V40C44.1816 40 45.5 41.3184 45.5 42.8125C45.5 44.3945 44.1816 45.625 42.6875 45.625H27.2188V40H18.7812V45.625H3.3125C1.73047 45.625 0.5 44.3945 0.5 42.8125C0.5 41.3184 1.73047 40 3.3125 40V6.25C1.73047 6.25 0.5 5.01953 0.5 3.4375C0.5 1.94336 1.73047 0.625 3.3125 0.625H42.6875ZM10.3438 9.0625C9.55273 9.0625 8.9375 9.76562 8.9375 10.4688V13.2812C8.9375 14.0723 9.55273 14.6875 10.3438 14.6875H13.1562C13.8594 14.6875 14.5625 14.0723 14.5625 13.2812V10.4688C14.5625 9.76562 13.8594 9.0625 13.1562 9.0625H10.3438ZM20.1875 13.2812C20.1875 14.0723 20.8027 14.6875 21.5938 14.6875H24.4062C25.1094 14.6875 25.8125 14.0723 25.8125 13.2812V10.4688C25.8125 9.76562 25.1094 9.0625 24.4062 9.0625H21.5938C20.8027 9.0625 20.1875 9.76562 20.1875 10.4688V13.2812ZM32.8438 9.0625C32.0527 9.0625 31.4375 9.76562 31.4375 10.4688V13.2812C31.4375 14.0723 32.0527 14.6875 32.8438 14.6875H35.6562C36.3594 14.6875 37.0625 14.0723 37.0625 13.2812V10.4688C37.0625 9.76562 36.3594 9.0625 35.6562 9.0625H32.8438ZM8.9375 21.7188C8.9375 22.5098 9.55273 23.125 10.3438 23.125H13.1562C13.8594 23.125 14.5625 22.5098 14.5625 21.7188V18.9062C14.5625 18.2031 13.8594 17.5 13.1562 17.5H10.3438C9.55273 17.5 8.9375 18.2031 8.9375 18.9062V21.7188ZM21.5938 17.5C20.8027 17.5 20.1875 18.2031 20.1875 18.9062V21.7188C20.1875 22.5098 20.8027 23.125 21.5938 23.125H24.4062C25.1094 23.125 25.8125 22.5098 25.8125 21.7188V18.9062C25.8125 18.2031 25.1094 17.5 24.4062 17.5H21.5938ZM31.4375 21.7188C31.4375 22.5098 32.0527 23.125 32.8438 23.125H35.6562C36.3594 23.125 37.0625 22.5098 37.0625 21.7188V18.9062C37.0625 18.2031 36.3594 17.5 35.6562 17.5H32.8438C32.0527 17.5 31.4375 18.2031 31.4375 18.9062V21.7188ZM23 25.9375C19.0449 25.9375 15.7051 28.6621 14.7383 32.3535C14.4746 33.4961 15.4414 34.375 16.6719 34.375H29.3281C30.4707 34.375 31.4375 33.4961 31.1738 32.3535C30.207 28.6621 26.8672 25.9375 23 25.9375Z" fill="#005D79"/>
</svg>                                                    
                    </div>
                    <div class="title">Restauration des égouts</div>
                    <div class="desc">Notre service restaure les réservoirs d&apos;eaux usées sans interrompre leur fonctionnement, en insérant un tuyau en polyéthylène à haute rigidité, assurant débit et intégrité durables.</div>
                    <div class="button"><a href="/services">EN SAVOIR PLUS</a></div>
                </motion.div>
                <motion.div 
                variants={SlideLeft(0.6)}
                initial="hidden"
                whileInView={"visible"} class="card">
                    <div class="icon">
                    <svg width="57" height="46" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5205 4.34375C25.5205 2.05859 27.3662 0.125 29.7393 0.125H38.1768C40.4619 0.125 42.3955 2.05859 42.3955 4.34375V17H45.9111V10.6719C45.9111 9.5293 46.79 8.5625 48.0205 8.5625C49.1631 8.5625 50.1299 9.5293 50.1299 10.6719V17H52.2393C54.5244 17 56.458 18.9336 56.458 21.2188V40.9062C56.458 43.2793 54.5244 45.125 52.2393 45.125H29.7393C27.3662 45.125 25.5205 43.2793 25.5205 40.9062V4.34375ZM31.1455 9.96875C31.1455 10.7598 31.7607 11.375 32.5518 11.375H35.3643C36.0674 11.375 36.7705 10.7598 36.7705 9.96875V7.15625C36.7705 6.45312 36.0674 5.75 35.3643 5.75H32.5518C31.7607 5.75 31.1455 6.45312 31.1455 7.15625V9.96875ZM32.5518 14.1875C31.7607 14.1875 31.1455 14.8906 31.1455 15.5938V18.4062C31.1455 19.1973 31.7607 19.8125 32.5518 19.8125H35.3643C36.0674 19.8125 36.7705 19.1973 36.7705 18.4062V15.5938C36.7705 14.8906 36.0674 14.1875 35.3643 14.1875H32.5518ZM31.1455 26.8438C31.1455 27.6348 31.7607 28.25 32.5518 28.25H35.3643C36.0674 28.25 36.7705 27.6348 36.7705 26.8438V24.0312C36.7705 23.3281 36.0674 22.625 35.3643 22.625H32.5518C31.7607 22.625 31.1455 23.3281 31.1455 24.0312V26.8438ZM46.6143 22.625C45.8232 22.625 45.208 23.3281 45.208 24.0312V26.8438C45.208 27.6348 45.8232 28.25 46.6143 28.25H49.4268C50.1299 28.25 50.833 27.6348 50.833 26.8438V24.0312C50.833 23.3281 50.1299 22.625 49.4268 22.625H46.6143ZM45.208 35.2812C45.208 36.0723 45.8232 36.6875 46.6143 36.6875H49.4268C50.1299 36.6875 50.833 36.0723 50.833 35.2812V32.4688C50.833 31.7656 50.1299 31.0625 49.4268 31.0625H46.6143C45.8232 31.0625 45.208 31.7656 45.208 32.4688V35.2812ZM19.8955 14.1875C19.8955 14.7148 19.8076 15.1543 19.7197 15.5938C21.4775 16.8242 22.708 18.9336 22.708 21.2188C22.708 25.1738 19.5439 28.25 15.6768 28.25H14.2705V42.3125C14.2705 43.8945 12.9521 45.125 11.458 45.125C9.87598 45.125 8.64551 43.8945 8.64551 42.3125V28.25H7.23926C3.28418 28.25 0.208008 25.1738 0.208008 21.2188C0.208008 18.9336 1.35059 16.8242 3.1084 15.5938C3.02051 15.1543 3.02051 14.7148 3.02051 14.1875C3.02051 9.5293 6.71191 5.75 11.458 5.75C16.1162 5.75 19.8955 9.5293 19.8955 14.1875Z" fill="#005D79"/>
</svg>                                                    
                    </div>
                    <div class="title">Construction de nouveaux conduits</div>
                    <div class="desc">Nous posons des canalisations jusqu&apos;à 4000 mm via forages directionnels et micro-tunnels sans tranchées.</div>
                    <div class="button"><a href="/services">EN SAVOIR PLUS</a></div>
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