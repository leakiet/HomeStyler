import React, { useContext } from 'react'
import './AppBar.css'
import DesignStyles from './DesignStyles/DesignStyles'
import Products from './Products/Products'
import DesignersGallary from './DesignerGallary/DesignersGallary'
import HomeStylerLogo from '../../../assets/HomeStylerLogo.png'
import { DataContext } from '../../../context/DataContext'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const {userInfo} = useContext(DataContext)
  const navigate = useNavigate();
  function handleInfo(){
    navigate("/profile")
  }
  return (
    <div style={{
      height: '58px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 16,
      color: '#AB8A7A',
      background: '#E0D7C7',
      padding: '10px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <a href="#">
            <img src={HomeStylerLogo} alt="logo" width="55px" />
          </a>
          <a href="#">
            <span style={{ fontSize: '26px', }}>Home Styler</span>
          </a>
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

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }}>
        <div>
          <div className="input-group flex-nowrap">
            <input type="text" className="SearchInput" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
            <span className="input-group-text SearchText" id="addon-wrapping"><i className="bi bi-search" style={{ color: '#AB8A7A', fontSize: 9.0 }} /></span>
          </div>

        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <a href='#'>
            <i className="bi bi-person-fill" style={{ fontSize: '20px' }} />
          </a>
          {userInfo != null?(<button onClick={handleInfo} className='btn btn-info'>{userInfo?.fullname}</button>): <a to='/login'>Login</a>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <a href="#">
            <i className="bi bi-cart-fill" style={{ fontSize: '20px' }} />
          </a>
          <a href='#'>Cart</a>
        </div>
      </div>

    </div>
  )
}

export default NavBar
