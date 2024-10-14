import React from 'react'
import "./Message.css"
import { SlideLeft, SlideRight } from '../../utils/animate'
import {motion} from "framer-motion"

const Message = () => {
  return (
    <section class="message">
    <div class="container">
        <motion.div variants={SlideRight(0.3)}
          initial="hidden"
          whileInView={"visible"} class="left">
            <div class="up">
                <div class="title">Laissez-nous un message...</div>
                <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</div>
            </div>
            <form action="">
                <div class="element">
                    <div class="element1">
                        <label for="">Prenom</label>
                        <input type="text" placeholder="Ex.Mohammed"/>
                    </div>
                    <div class="element2">
                        <label for="">Nom</label>
                        <input type="text" placeholder="Ex.Achab"/>
                    </div>
                    <div class="element3">
                        <label for="">Adress Email</label>
                        <input type="email" placeholder="Ex.Hello@mail"/>
                    </div>
                    <div class="element4">
                        <label for="">Sujet</label>
                        <input type="text" placeholder="Votre Sujet"/>
                    </div>
                    <div class="element5">
                        <label for="">Message</label>
                        <textarea name="" id="" placeholder="Votre Message..."></textarea>
                    </div>
                </div>
                <div class="button">
                    <button type="submit">ENVOYER LE MESSAGE</button>
                </div>
            </form>
        </motion.div>
        <motion.div variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView={"visible"} class="right">
            <div class="one">Restez connectés</div>
            <div class="two">RESTEZ EN CONTACT AVEC NOUS</div>
            <div class="three">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="four">
                <div>
                    <div class="log">
                        <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.25 30.4824L13.125 26.7227V0.335938L26.25 4.0957V30.4824ZM28.4375 3.95898L37.1191 0.472656C38.1445 0.0625 39.375 0.814453 39.375 1.97656V24.877C39.375 25.5605 38.9648 26.1758 38.2812 26.3809L28.4375 30.3457V3.95898ZM1.02539 4.4375L10.9375 0.472656V26.8594L2.1875 30.3457C1.16211 30.7559 0 30.0039 0 28.8418V5.94141C0 5.25781 0.341797 4.64258 1.02539 4.4375Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="disc">
                        <p>Notre siège social</p>
                        <p>Alger centre, Alger, Algérie</p>
                    </div>
                </div>
                <div>
                    <div class="log">
                        <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7188 0.25C33.4961 0.25 35 1.75391 35 3.53125C35 4.625 34.4531 5.58203 33.6328 6.19727L18.7988 17.3398C17.9785 17.9551 16.9531 17.9551 16.1328 17.3398L1.29883 6.19727C0.478516 5.58203 0 4.625 0 3.53125C0 1.75391 1.43555 0.25 3.28125 0.25H31.7188ZM14.834 19.1172C16.4062 20.2793 18.5254 20.2793 20.0977 19.1172L35 7.90625V22.125C35 24.5859 33.0176 26.5 30.625 26.5H4.375C1.91406 26.5 0 24.5859 0 22.125V7.90625L14.834 19.1172Z" fill="white"/>
                        </svg>                            
                    </div>
                    <div class="disc">
                        <p>Adresse mail</p>
                        <p>Hello@Email.com</p>
                    </div>
                </div>
                <div>
                    <div class="log">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.25 0.0625C28.6426 0.0625 30.625 2.04492 30.625 4.4375V26.3125C30.625 28.7734 28.6426 30.6875 26.25 30.6875H4.375C1.91406 30.6875 0 28.7734 0 26.3125V4.4375C0 2.04492 1.91406 0.0625 4.375 0.0625H26.25ZM23.9941 19.8867C24.1309 19.4082 23.8574 18.8613 23.3789 18.6562L19.6875 17.084C19.209 16.8789 18.7305 17.0156 18.457 17.3574L16.9531 19.2031C14.5605 18.041 12.6465 16.127 11.4844 13.7344L13.3301 12.2305C13.6719 11.957 13.8086 11.4785 13.6035 11L12.0312 7.30859C11.8262 6.83008 11.2793 6.55664 10.8008 6.69336L7.38281 7.44531C6.9043 7.58203 6.5625 7.99219 6.5625 8.53906C6.5625 17.1523 13.5352 24.125 22.1484 24.125C22.6953 24.125 23.1055 23.8516 23.1738 23.3047L23.9941 19.8867Z" fill="white"/>
                        </svg>                            
                    </div>
                    <div class="disc">
                        <p>Numéro de téléphone</p>
                        <p>(+213) 123 456 789</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  </section>
  )
}

export default Message