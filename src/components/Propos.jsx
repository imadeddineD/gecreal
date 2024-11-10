import React from 'react'
import Heroo from './Heroo/Heroo'
import Vision from './Vision/Vision'
import Howwork from './Howwork/Howwork'
import Whyus from './Whyus/Whyus'
import Contact from './Contact/Contact'
import image2 from "../assets/img2.png"
import Proposs from './Propos/Propos'

const Propos = () => {
  return (
    <>
     <Heroo title="À PROPOS DE NOUS" subTit="À PROPOS" image={image2} descreption={"GEC International, une société se développant activement en offrant une large gamme de services pour la réparation sans tranchée et la construction de réseaux externes d&apos;alimentation en eau: les égouts, les canalisations d&apos;eau chaude et de vapeur, ainsi que l&apos;industrie des pipelines technologiques"} />
     <Proposs/>
     <Vision/>
     <Howwork/>
     <Whyus/>
     <Contact/>
    </>
  )
}

export default Propos