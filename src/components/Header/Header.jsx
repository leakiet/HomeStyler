import React from 'react'
import AppBar from './AppBar/AppBar'
import TopBar from './TopBar/TopBar'

function Header({ itemsCartCount }) {
  return (
    <>
      <TopBar />
      <AppBar itemsCartCount={itemsCartCount} />
    </>
  )
}

export default Header
