import React from 'react'
import './Main.css'
import Hero from './Hero/Hero'
import Specials from './Specials/Specials'
import Testamonials from './Testamonials/Testamonials'
import About from './About/About'
const Main = () => {
  return (
    <main>
      <Hero/>
      <Specials/>
      <Testamonials/>
      <About/>
    </main>
  )
}

export default Main
