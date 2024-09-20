import React from 'react'
import banner from '../../assets/HOME-DECOR-BANNER.jpg'

function Banner() {
    return (
        <div style={{ paddingBottom: '20px' }}>
            <img className='banner' src={banner} alt="BannerProduct" height="500px" width="100%" />
        </div>
    )
}

export default Banner
