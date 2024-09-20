import React from 'react'
import AppBar from './AppBar/AppBar'
import TopBar from './TopBar/TopBar'

function Header({ itemsCartCount }) {
  return (
    <div className='header-css'>
      <TopBar />
      <AppBar itemsCartCount={itemsCartCount} />
    </div>
  )
}

export default Header
