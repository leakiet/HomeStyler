import React from 'react'
import './AppBar.css'

function NavBar() {
  return (
    <div style={{
      height: '58px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 18,
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
        <div>
          Logo + Name
        </div>
        <div>
          Design Styles
        </div>
        <div>
          Designers Gallary
        </div>
        <div>
          Products
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
            <span className="input-group-text SearchText" id="addon-wrapping"><i class="bi bi-search" style={{ color: '#AB8A7A' , fontSize: 11.4}}/></span>
          </div>
          
        </div>
        <div style={{ display:'flex', alignItems:'center', gap: 5 }}>
          <i class="bi bi-person-fill" style={{ fontSize: '24px' }} />
          <span>Account</span>
        </div>
        <div  style={{ display:'flex', alignItems:'center', gap: 5 }}>
          <i class="bi bi-cart-fill" style={{ fontSize: '24px' }} />
          <span>Cart</span>
        </div>
      </div>

    </div>
  )
}

export default NavBar
