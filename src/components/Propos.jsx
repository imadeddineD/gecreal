import React from 'react'
import Heroo from './Heroo/Heroo'
import History from './History/His'
import Vision from './Vision/Vision'
import Howwork from './Howwork/Howwork'
import Whyus from './Whyus/Whyus'
import Contact from './Contact/Contact'
import image2 from "../assets/img2.png"

const Propos = () => {
  return (
    <>
     <Heroo title="À PROPOS DE NOUS" subTit="À PROPOS" image={image2} />
     <History/>
     <Vision/>
     <Howwork/>
     <Whyus/>
     <Contact/>
    </>
  )
}

export default Propos