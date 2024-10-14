import React from 'react'
import Heroo from './Heroo/Heroo'
import image3 from "../assets/img1.jpeg"
import Message from './Message/Message'
import Map from './Map/Map'

const Contact = () => {
  return (
    <>
    <Heroo title="NOUS SOMMES À VOTRE SERVICE" subTit="CONTACTEZ-NOUS" image={image3} />
    <Message/>
    <Map/>
    </>
  )
}

export default Contact