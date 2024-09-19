import React from 'react';
import './designIdea.css'

import { useEffect, useState } from 'react'


function DesignIdea(props) {

    const [designStyles, setDesignStyles] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data/roomtype.json");
                const data = await response.json();
                setDesignStyles(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);



    return (
        <div className='container-designidea'>
            <div className='designidea-title'>
                <h1>Modular Kitchen Designs</h1>
                <p>We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen design ideas can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that
                    works best for your home is our goal! Browse through our top kitchen designs to transform your space today.</p>
            </div>

            <div className='container-designidea-card'>
                {designStyles.map((designStyle, index) => (
                    <div className='di-card' key={index}>
                        <div className='di-image'>
                            <span className='di-love-image'><i className="bi bi-heart-fill"></i></span>
                            {designStyle.image ? (
                                <img src={designStyle.image} alt={designStyle.name} />
                            ) : (
                                <p>No image available</p>
                            )}

                        </div>
                        <div className='di-text'>
                            <div className='di-title'>
                                <h4>
                                    {(designStyle.name) ? designStyle.name : "No name available"}
                                </h4>
                            </div>
                            <div className='di-discription'>
                                size:  {(designStyle.size) ? designStyle.size : "No size available"}
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