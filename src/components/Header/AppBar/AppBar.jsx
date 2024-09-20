import React, { useContext, useState } from 'react';
import './AppBar.css';
import DesignStyles from './DesignStyles/DesignStyles';
import Products from './Products/Products';
import DesignersGallary from './DesignerGallary/DesignersGallary';
import HomeStylerLogo from '../../../assets/HomeStylerLogo.png';
import { Link } from 'react-router-dom';

function NavBar({ itemsCartCount }) {
  const [showLogin, setShowLogin] = useState(false);

  const removeUser = () => {
    localStorage.removeItem('username');
  };

  return (
    <div className='app-bar-wrapper'>
      <div className='app-bar-left'>
        <div className='app-bar-logo'>
          <Link to='/'>
            <img src={HomeStylerLogo} alt='logo' width='55px' />
          </Link>
          <Link to='/'>
            <span style={{ fontSize: '26px' }}>HomeStyler</span>
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

      <div className='AppBar-right'>
        <div>
          <div className='input-group flex-nowrap'>
            <input type='text' className='SearchInput' placeholder='Search' aria-label='Search' aria-describedby='addon-wrapping'
            />
            <span className='input-group-text SearchText' id='addon-wrapping'>
              <i className='bi bi-search' style={{ color: '#73868A', fontSize: 9.0, cursor: 'pointer' }} />
            </span>
          </div>
        </div>
        <div
          onMouseEnter={() => setShowLogin(true)}
          onMouseLeave={() => setShowLogin(false)}
          className='account-link-container'
        >
          <Link style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <i className='bi bi-person-fill' style={{ fontSize: '20px' }} />
          </Link>

          {showLogin && (
            <div className='account-links'>
              {localStorage.getItem('username') ? (
                <>
                  <Link to='/userpage'>My Profile</Link>
                  <Link to='/login' onClick={() => removeUser()}>
                    Sign out
                  </Link>
                </>
              ) : (
                <>
                  <Link to='/login'>Sign in</Link>
                  <Link to='/signup'>Register</Link>
                </>
              )}
            </div>
          )}
        </div>

        <Link to='/cart' style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <i className='bi bi-cart-fill' style={{ fontSize: '20px' }} />
          <span>{itemsCartCount}</span>
        </Link>

      </div>

      <div className='menu-icon-i'>
          <i className='bi bi-list' style={{ fontSize: '24px', cursor: 'pointer' }} />
        </div>

    </div>
  );
}

export default NavBar;