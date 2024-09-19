import React from 'react'
import './AppBar.css'
import DesignStyles from './DesignStyles/DesignStyles'
import Products from './Products/Products'
import DesignersGallary from './DesignerGallary/DesignersGallary'
import HomeStylerLogo from '../../../assets/HomeStylerLogo.png'
import { Link } from 'react-router-dom'

function NavBar() {
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
            <span style={{ fontSize: '26px', }}>Home Styler</span>
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
            <span className="input-group-text SearchText" id="addon-wrapping"><i class="bi bi-search" style={{ color: '#73868A', fontSize: 9.0, cursor:'pointer' }} /></span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <a href='#'>
            <i class="bi bi-person-fill" style={{ fontSize: '20px' }} />
          </a>
          <a href='#'>Account</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <a href="#">
            <i class="bi bi-cart-fill" style={{ fontSize: '20px' }} />
          </a>
          <a href='#'>Cart</a>
        </div>
      </div>

    </div>
  )
}

export default NavBar
