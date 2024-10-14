import React from 'react'
import Heroo from './Heroo/Heroo'
import serv from "../assets/services.png"
import Allservices from './Services/Allservices'
import Whyus from './Whyus/Whyus'
import Ourwork from './Ourwork/Ourwork'
import Contact from './Contact/Contact'

const Services = () => {
  return (
    <>
    <Heroo title="LES SERVICES DE GEC INTERNATIONAL" subTit="Nos services" image={serv} />
    <Allservices/>
    <Whyus/>
    <Ourwork/>
    <Contact/>
    </>
  )
}

export default Services