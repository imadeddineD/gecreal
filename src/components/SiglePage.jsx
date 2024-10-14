import React from 'react'
import serv from "../assets/services.png"
import Heroo from './Heroo/Heroo'
import Overview from './Overview/Overview'
import KnowladgeSection from './Knowledge/Knowledge'
import Ourwork from './Ourwork/Ourwork'
import Contact from './Contact/Contact'


const SiglePage = () => {
  return (
    <>
        <Heroo title="SERVICE SINGLE" subTit="SERVICE SINGLE" image={serv} />
        <Overview/>
        <KnowladgeSection/>
        <Ourwork/>
        <Contact/>

    </>
  )
}

export default SiglePage