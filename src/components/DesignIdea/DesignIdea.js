import React from 'react';
import './designIdea.css'

function DesignIdea(props) {
    const array = [
        {
            "image": 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            "image": 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            "image": 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            "image": 'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            "image": 'https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg?auto=compress&cs=tinysrgb&w=600'
        }

    ]
    return (
        <div className='container-designidea'>
            <div className='designidea-title'>
                <h1>Modular Kitchen Designs</h1>
                <p>We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen design ideas can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that
                    works best for your home is our goal! Browse through our top kitchen designs to transform your space today.</p>
            </div>

            <div className='container-designidea-card'>
                {array.map((e, index) =>(
                <div className='di-card' key={index}>
                    <div className='di-image'>
                        <span className='di-love-image'><i className="bi bi-heart-fill"></i></span>
                        <img src={e.image} alt='img' />
                    
                    </div>
                    <div className='di-text'>
                        <div className='di-title'>
                            <h4>
                            Modern Open Kitchen Design with Quartz Countertop and Backsplash
                            </h4>
                        </div>
                        <div className='di-discription'>
                            size: 12x10 feet
                        </div>
                    </div>
                    <div className='di-btn'>
                        <button className='di-consultation btn btn-danger rounded-pill'>
                            book free consultation
                        </button>
                        <button className='di-getquote btn btn-light rounded-pill'>
                            get quote
                        </button>
                    </div>

                </div>

               
                ))} 
            </div>
        </div>
    );
}

export default DesignIdea;