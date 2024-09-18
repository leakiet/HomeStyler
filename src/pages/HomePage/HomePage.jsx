import React from 'react'
import TypeInterio from '../../components/typecards/TypeInterio'

function HomePage() {
  return (
    <div>
      <h2> This is Homepage</h2>
      <div className='row'>
        <h5>One-stop shop for all things interiors</h5>
        <p>Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office.
          With a wide range of furniture & decor, we have your back from start to finish.</p>
          <TypeInterio/>
      </div>
    </div>
  )
}

export default HomePage
