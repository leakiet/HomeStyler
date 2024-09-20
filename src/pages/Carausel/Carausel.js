import React from 'react';
import './carausel.css'


function Carausel(props) {
    return (
        <div className='container-banner'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/IMAGES/LIVING_ROOM/p1.avif" className="d-block w-100" alt="Living Room" />
                    </div>
                    <div className="carousel-item">
                        <img src="/IMAGES/KITCHEN/p2.avif" className="d-block w-100" alt="Kitchen" />
                    </div>
                    <div className="carousel-item">
                        <img src="/IMAGES/BED_ROOM/p2.avif" className="d-block w-100" alt="Bedroom" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carausel;