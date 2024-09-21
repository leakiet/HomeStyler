import React from 'react';
import './carausel.css'


function Carausel(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='container-banner'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                {/* <Carousel responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={true}
                arrows={true}
            > */}
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
            </div>
        </div>
    );
}

export default Carausel;