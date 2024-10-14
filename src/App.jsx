import React from 'react'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import About from './components/About/About'
import HistorySection from './components/History/History'
import Services from './components/Services/Services'
import Whyus from './components/Whyus/Whyus'
import Ourwork from './components/Ourwork/Ourwork'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Hero/>
      <Numbers/>
      <About/>
      <HistorySection/>
      <Services/>
      <Whyus/>
      <Ourwork/>
      <Clients/>
      <Contact/>
    </div>
  )
}

export default App