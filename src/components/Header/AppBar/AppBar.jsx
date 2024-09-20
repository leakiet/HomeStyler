import React, { useState } from 'react'
import './AppBar.css'
import DesignStyles from './DesignStyles/DesignStyles'
import Products from './Products/Products'
import DesignersGallary from './DesignerGallary/DesignersGallary'
import HomeStylerLogo from '../../../assets/HomeStylerLogo.png'
import { Link } from 'react-router-dom'

function NavBar({ itemsCartCount }) {
  const [showLogin, setShowLogin] = useState(false);

  const removeUser = () => {
    localStorage.removeItem('username');
    console.log(localStorage)
  };

  return (
    <div style={{
      height: '58px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 16,
      color: '#73868A ',
      padding: '10px',
      borderBottom: '1px solid #73868A',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 30
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginRight: 30
        }}>
          <Link to="/">
            <img src={HomeStylerLogo} alt="logo" width="55px" />
          </Link>
          <Link to="/">
            <span style={{ fontSize: '26px', }}>HomeStyler</span>
          </Link>
        </div>
        <div>
          <DesignStyles />
        </div>
        <div>
          <DesignersGallary />
        </div>
        <div>
          <Products />
        </div>
      </div>

      <div className='AppBar-right' >
        <div>
          <div className="input-group flex-nowrap">
            <input type="text" className="SearchInput" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
            <span className="input-group-text SearchText" id="addon-wrapping"><i className="bi bi-search" style={{ color: '#AB8A7A', fontSize: 9.0 }} /></span>
            <span className="input-group-text SearchText" id="addon-wrapping"><i class="bi bi-search" style={{ color: '#73868A', fontSize: 9.0, cursor:'pointer' }} /></span>
          </div>
        </div>
        <div onMouseEnter={() => setShowLogin(true)}
              onMouseLeave={() => setShowLogin(false)}
        >
        <Link style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <i class="bi bi-person-fill" style={{ fontSize: '20px' }} />
            <span>Account</span>
          </Link>

            {showLogin && (
          <div className='account-links'>
            {localStorage.getItem('username') ? (
                <>
                  <Link to="/userpage">My Profile</Link>
                  <Link to="/login" onClick={() => removeUser()}>Sign out</Link>
                  {/* <button onClick={clearLocalStorage}>Clear localStorage</button> */}
                </>
              ) : (
                <>
                  <Link to="/login">Sign in</Link>
                  <Link to='/Signup'>Register</Link>
                </>
              )}
          </div>
          )}
        </div>

          <Link to="/cart"  style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <i class="bi bi-cart-fill" style={{ fontSize: '20px' }} />
            <span>Cart {itemsCartCount}</span>
          </Link>

      </div>
    </div>
  )
}

export default NavBar
