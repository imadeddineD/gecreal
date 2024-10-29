import React from 'react'
import "./Client.css"
import alter from "../../assets/alter.jpeg"
import client from '../../assets/clients.png' 
import { SlideUp } from '../../utils/animate'
import {motion} from "framer-motion"

const Clients = () => {
  return (
    <section class="nosclients">
        <div class="container">
            <motion.div  
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            class="upper">
                <div class="one">QUE DISENT-ILS?</div>
                <div class="two">NOS RETOURS CLIENTS</div>
                <div class="three">
                    <span>VOIR TOUT </span>
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
            whileInView={"visible"} class="lower">
                <div class="left">
                    <img src={client} alt="lower"/>
                    <div>
                        <svg width="80" height="80" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="90" height="90" rx="45" fill="#C5C5C5"/>
                        <path d="M56.6777 42.5723C57.6348 43.1875 58.25 44.2812 58.25 45.375C58.25 46.5371 57.6348 47.6309 56.6777 48.1777L36.9902 60.209C35.9648 60.8242 34.666 60.8926 33.6406 60.2773C32.6152 59.7305 32 58.6367 32 57.4062V33.3438C32 32.1816 32.6152 31.0879 33.6406 30.541C34.666 29.9258 35.9648 29.9258 36.9902 30.6094L56.6777 42.5723Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <div class="stars">
                            <svg width="155" height="21" viewBox="0 0 155 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8828 6.39844L20.4688 7.21875C20.9375 7.29688 21.3281 7.60938 21.4844 8.07812C21.6406 8.50781 21.5234 9.01562 21.1719 9.32812L17.1094 13.3516L18.0859 19.0547C18.1641 19.5234 17.9688 19.9922 17.5781 20.2656C17.1875 20.5781 16.6797 20.5781 16.25 20.3828L11.25 17.6875L6.21094 20.3828C5.82031 20.5781 5.27344 20.5781 4.92188 20.2656C4.53125 19.9922 4.33594 19.5234 4.41406 19.0547L5.35156 13.3516L1.28906 9.32812C0.9375 9.01562 0.820312 8.50781 0.976562 8.07812C1.13281 7.60938 1.52344 7.29688 1.99219 7.21875L7.61719 6.39844L10.1172 1.20312C10.3125 0.773438 10.7422 0.5 11.25 0.5C11.7188 0.5 12.1484 0.773438 12.3438 1.20312L14.8828 6.39844Z" fill="#6B6B6B"/>
                            <path d="M47.8828 6.39844L53.4688 7.21875C53.9375 7.29688 54.3281 7.60938 54.4844 8.07812C54.6406 8.50781 54.5234 9.01562 54.1719 9.32812L50.1094 13.3516L51.0859 19.0547C51.1641 19.5234 50.9688 19.9922 50.5781 20.2656C50.1875 20.5781 49.6797 20.5781 49.25 20.3828L44.25 17.6875L39.2109 20.3828C38.8203 20.5781 38.2734 20.5781 37.9219 20.2656C37.5312 19.9922 37.3359 19.5234 37.4141 19.0547L38.3516 13.3516L34.2891 9.32812C33.9375 9.01562 33.8203 8.50781 33.9766 8.07812C34.1328 7.60938 34.5234 7.29688 34.9922 7.21875L40.6172 6.39844L43.1172 1.20312C43.3125 0.773438 43.7422 0.5 44.25 0.5C44.7188 0.5 45.1484 0.773438 45.3438 1.20312L47.8828 6.39844Z" fill="#6B6B6B"/>
                            <path d="M80.8828 6.39844L86.4688 7.21875C86.9375 7.29688 87.3281 7.60938 87.4844 8.07812C87.6406 8.50781 87.5234 9.01562 87.1719 9.32812L83.1094 13.3516L84.0859 19.0547C84.1641 19.5234 83.9688 19.9922 83.5781 20.2656C83.1875 20.5781 82.6797 20.5781 82.25 20.3828L77.25 17.6875L72.2109 20.3828C71.8203 20.5781 71.2734 20.5781 70.9219 20.2656C70.5312 19.9922 70.3359 19.5234 70.4141 19.0547L71.3516 13.3516L67.2891 9.32812C66.9375 9.01562 66.8203 8.50781 66.9766 8.07812C67.1328 7.60938 67.5234 7.29688 67.9922 7.21875L73.6172 6.39844L76.1172 1.20312C76.3125 0.773438 76.7422 0.5 77.25 0.5C77.7188 0.5 78.1484 0.773438 78.3438 1.20312L80.8828 6.39844Z" fill="#6B6B6B"/>
                            <path d="M113.883 6.39844L119.469 7.21875C119.938 7.29688 120.328 7.60938 120.484 8.07812C120.641 8.50781 120.523 9.01562 120.172 9.32812L116.109 13.3516L117.086 19.0547C117.164 19.5234 116.969 19.9922 116.578 20.2656C116.188 20.5781 115.68 20.5781 115.25 20.3828L110.25 17.6875L105.211 20.3828C104.82 20.5781 104.273 20.5781 103.922 20.2656C103.531 19.9922 103.336 19.5234 103.414 19.0547L104.352 13.3516L100.289 9.32812C99.9375 9.01562 99.8203 8.50781 99.9766 8.07812C100.133 7.60938 100.523 7.29688 100.992 7.21875L106.617 6.39844L109.117 1.20312C109.312 0.773438 109.742 0.5 110.25 0.5C110.719 0.5 111.148 0.773438 111.344 1.20312L113.883 6.39844Z" fill="#6B6B6B"/>
                            <path d="M146.883 6.39844L152.469 7.21875C152.938 7.29688 153.328 7.60938 153.484 8.07812C153.641 8.50781 153.523 9.01562 153.172 9.32812L149.109 13.3516L150.086 19.0547C150.164 19.5234 149.969 19.9922 149.578 20.2656C149.188 20.5781 148.68 20.5781 148.25 20.3828L143.25 17.6875L138.211 20.3828C137.82 20.5781 137.273 20.5781 136.922 20.2656C136.531 19.9922 136.336 19.5234 136.414 19.0547L137.352 13.3516L133.289 9.32812C132.938 9.01562 132.82 8.50781 132.977 8.07812C133.133 7.60938 133.523 7.29688 133.992 7.21875L139.617 6.39844L142.117 1.20312C142.312 0.773438 142.742 0.5 143.25 0.5C143.719 0.5 144.148 0.773438 144.344 1.20312L146.883 6.39844Z" fill="#6B6B6B"/>
                            </svg>
                        </div>
                        <div class="talk">
                            {"“"}  La qualité des travaux réalisés par la OOO PF «STIS» mérite les plus grands éloges, et l&apos;usine de traitement du gaz est intéressé par une coopération avec la société  {"“"}
                        </div>
                        {/* <div class="profil">
                            <div class="img"><img src={alter} alt=""/></div>
                            <div>
                                <div>Mr. Med Abach</div>
                                <div>Mr. Med Abach</div>
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <div class="stars">
                            <svg width="155" height="21" viewBox="0 0 155 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8828 6.39844L20.4688 7.21875C20.9375 7.29688 21.3281 7.60938 21.4844 8.07812C21.6406 8.50781 21.5234 9.01562 21.1719 9.32812L17.1094 13.3516L18.0859 19.0547C18.1641 19.5234 17.9688 19.9922 17.5781 20.2656C17.1875 20.5781 16.6797 20.5781 16.25 20.3828L11.25 17.6875L6.21094 20.3828C5.82031 20.5781 5.27344 20.5781 4.92188 20.2656C4.53125 19.9922 4.33594 19.5234 4.41406 19.0547L5.35156 13.3516L1.28906 9.32812C0.9375 9.01562 0.820312 8.50781 0.976562 8.07812C1.13281 7.60938 1.52344 7.29688 1.99219 7.21875L7.61719 6.39844L10.1172 1.20312C10.3125 0.773438 10.7422 0.5 11.25 0.5C11.7188 0.5 12.1484 0.773438 12.3438 1.20312L14.8828 6.39844Z" fill="#6B6B6B"/>
                            <path d="M47.8828 6.39844L53.4688 7.21875C53.9375 7.29688 54.3281 7.60938 54.4844 8.07812C54.6406 8.50781 54.5234 9.01562 54.1719 9.32812L50.1094 13.3516L51.0859 19.0547C51.1641 19.5234 50.9688 19.9922 50.5781 20.2656C50.1875 20.5781 49.6797 20.5781 49.25 20.3828L44.25 17.6875L39.2109 20.3828C38.8203 20.5781 38.2734 20.5781 37.9219 20.2656C37.5312 19.9922 37.3359 19.5234 37.4141 19.0547L38.3516 13.3516L34.2891 9.32812C33.9375 9.01562 33.8203 8.50781 33.9766 8.07812C34.1328 7.60938 34.5234 7.29688 34.9922 7.21875L40.6172 6.39844L43.1172 1.20312C43.3125 0.773438 43.7422 0.5 44.25 0.5C44.7188 0.5 45.1484 0.773438 45.3438 1.20312L47.8828 6.39844Z" fill="#6B6B6B"/>
                            <path d="M80.8828 6.39844L86.4688 7.21875C86.9375 7.29688 87.3281 7.60938 87.4844 8.07812C87.6406 8.50781 87.5234 9.01562 87.1719 9.32812L83.1094 13.3516L84.0859 19.0547C84.1641 19.5234 83.9688 19.9922 83.5781 20.2656C83.1875 20.5781 82.6797 20.5781 82.25 20.3828L77.25 17.6875L72.2109 20.3828C71.8203 20.5781 71.2734 20.5781 70.9219 20.2656C70.5312 19.9922 70.3359 19.5234 70.4141 19.0547L71.3516 13.3516L67.2891 9.32812C66.9375 9.01562 66.8203 8.50781 66.9766 8.07812C67.1328 7.60938 67.5234 7.29688 67.9922 7.21875L73.6172 6.39844L76.1172 1.20312C76.3125 0.773438 76.7422 0.5 77.25 0.5C77.7188 0.5 78.1484 0.773438 78.3438 1.20312L80.8828 6.39844Z" fill="#6B6B6B"/>
                            <path d="M113.883 6.39844L119.469 7.21875C119.938 7.29688 120.328 7.60938 120.484 8.07812C120.641 8.50781 120.523 9.01562 120.172 9.32812L116.109 13.3516L117.086 19.0547C117.164 19.5234 116.969 19.9922 116.578 20.2656C116.188 20.5781 115.68 20.5781 115.25 20.3828L110.25 17.6875L105.211 20.3828C104.82 20.5781 104.273 20.5781 103.922 20.2656C103.531 19.9922 103.336 19.5234 103.414 19.0547L104.352 13.3516L100.289 9.32812C99.9375 9.01562 99.8203 8.50781 99.9766 8.07812C100.133 7.60938 100.523 7.29688 100.992 7.21875L106.617 6.39844L109.117 1.20312C109.312 0.773438 109.742 0.5 110.25 0.5C110.719 0.5 111.148 0.773438 111.344 1.20312L113.883 6.39844Z" fill="#6B6B6B"/>
                            <path d="M146.883 6.39844L152.469 7.21875C152.938 7.29688 153.328 7.60938 153.484 8.07812C153.641 8.50781 153.523 9.01562 153.172 9.32812L149.109 13.3516L150.086 19.0547C150.164 19.5234 149.969 19.9922 149.578 20.2656C149.188 20.5781 148.68 20.5781 148.25 20.3828L143.25 17.6875L138.211 20.3828C137.82 20.5781 137.273 20.5781 136.922 20.2656C136.531 19.9922 136.336 19.5234 136.414 19.0547L137.352 13.3516L133.289 9.32812C132.938 9.01562 132.82 8.50781 132.977 8.07812C133.133 7.60938 133.523 7.29688 133.992 7.21875L139.617 6.39844L142.117 1.20312C142.312 0.773438 142.742 0.5 143.25 0.5C143.719 0.5 144.148 0.773438 144.344 1.20312L146.883 6.39844Z" fill="#6B6B6B"/>
                            </svg>
                        </div>
                        <div class="talk">
                            {"“"}  La Compagnie de Production «STIS» effectue les travaux pour la réfection majeure de réseaux d&apos;eaux usées fécales en utilisant la technologie sans tranchée avec succès et qualité  {"“"}
                        </div>
                        {/* <div class="profil">
                            <div class="img"><img src={alter} alt=""/></div>
                            <div>
                                <div>Mr. Med Abach</div>
                                <div>Mr. Med Abach</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Clients