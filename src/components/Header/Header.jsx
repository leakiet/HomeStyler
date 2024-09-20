import React from 'react'
import AppBar from './AppBar/AppBar'
import TopBar from './TopBar/TopBar'

function Header(props) {
  const {userInfo,setUserInfo} = props;
  
  return (
    <div>
      <TopBar />
      <AppBar />
    </div>
  )
}

export default Header
