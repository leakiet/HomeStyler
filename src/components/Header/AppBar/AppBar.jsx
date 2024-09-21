import React, { useContext, useState } from 'react'
import './AppBar.css'
import DesignStyles from './DesignStyles/DesignStyles'
import Products from './Products/Products'
import DesignersGallary from './DesignerGallary/DesignersGallary'
import HomeStylerLogo from '../../../assets/HomeStylerLogo.png'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../context/DataContext'
function NavBar({ itemsCartCount }) {
  const [showAccountLinks, setShowAccountLinks] = useState(false);
  const { cart, userInfo } = useContext(DataContext)
  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleAccount = () => {
    setShowAccountLinks(!showAccountLinks);
  }

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
        {/* <div>
          <div className="input-group flex-nowrap">
            <input type="text" className="SearchInput" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
            <span className="input-group-text SearchText" id="addon-wrapping"><i className="bi bi-search" style={{ color: '#73868A', fontSize: 9.0, cursor:'pointer' }} /></span>
          </div>
        </div> */}
        <div >
          <Link style={{ display: 'flex', alignItems: 'center', gap: 5 }} onClick={handleAccount}>
            <i className="bi bi-person-fill" style={{ fontSize: '20px' }} />
            <span >Account</span>
          </Link>

          <div className='account-links' style={{ display: showAccountLinks ? 'block' : 'none' }}>
            {(userInfo === null) ? (
              <>
                <div className='account-item'>
                  <Link to="/login">Sign in</Link>
                  <Link to='/Signup'>Register</Link>
                </div>

              </>
            ) : (
              <>
                <div className='account-item'>

                  <Link to="/profile">My Profile</Link>
                  <Link to="/login">Sign out</Link>
                </div>
              </>
            )}

          </div>
        </div>

        <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <i className="bi bi-cart-fill" style={{ fontSize: '20px' }} />
          <span>Cart {getTotalItems()}</span>
        </Link>

      </div>
    </div>
  )
}

export default NavBar
