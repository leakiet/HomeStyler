import React from 'react'
import './topBar.css'
import { Link } from 'react-router-dom'

function TopBar() {
    return (
        <div className='top-bar'>
            <div className='top-bar-list'>
                <div className='top-bar-item'>
                    Welcome to Home Styler
                </div>
            </div>

            <div className='top-bar-list'>
                <Link className='top-bar-item' to='/contact-us'>Contact Us</Link>
                <Link className='top-bar-item' to='/about-us'>About Us</Link>
                <Link className='top-bar-item' to='/site-map'>Site Map</Link>
            </div>
        </div>
    )
}

export default TopBar
