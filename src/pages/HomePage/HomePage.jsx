import React from 'react'
import TypeInterio from '../../components/typecards/TypeInterio'
import './homePage.css'
import WhyChoosenUs from '../../components/WhyChoosenUs/WhyChoosenUs'

function HomePage() {
  return (
    <div>
      <div className='row'>
        <h2>One-stop shop for all things interiors</h2>
        <p>Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office.
          With a wide range of furniture & decor, we have your back from start to finish.</p>
          <TypeInterio/>
          <WhyChoosenUs/>
      </div>
    </div>
  )
}

export default HomePage
