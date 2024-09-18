import React from 'react'

function TopBar() {
    return (
        <div style={{
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 16,
            background: '#73868A' ,
            padding: '10px'
        }}>
            <div>
                <div>
                    Welcome to Home Styler
                </div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 15
            }}>
                <div>Contact Us</div>
                <div>About Us</div>
                <div>Site Map</div>
                <div>Mode Button</div>
            </div>
        </div>
    )
}

export default TopBar
