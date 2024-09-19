import React from 'react'
import TypeInterio from '../../components/typecards/TypeInterio'
import './homePage.css'
import WhyChoosenUs from '../../components/WhyChoosenUs/WhyChoosenUs'
import Carousel from '../Carausel/Carausel'
import Inspiration from '../../components/Inspiration/Inspiration'

function HomePage() {
  return (
    <div>
      <div className='row'>
        <Carousel />
        <TypeInterio />
        <Inspiration/>
        <WhyChoosenUs />
      </div>
    </div>
  )
}

export default HomePage
