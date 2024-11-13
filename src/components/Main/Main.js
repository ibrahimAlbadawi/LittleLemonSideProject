import React from 'react'
import './Main.css'
import Hero from './Hero/Hero'
import Specials from './Specials/Specials'
import Testamonials from './Testamonials/Testamonials'
import About from './About/About'
const Main = (props) => {

  return (
    <main>
      <Hero infos={props.infos}/>
      <Specials/>
      <Testamonials/>
      <About/>
    </main>
  )
}

export default Main
