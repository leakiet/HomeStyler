import React from 'react';
import './whyChoosenUs.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function WhyChoosenUs(props) {

    const array = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,10 ,11,12
    ]

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
        <div className="container-why-choosen-us">
            <div className='wcs-title'>
                <h2>Why Choose Us</h2>
            </div>

            <Carousel responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={true}
                arrows={true}
            >
                <div className='wcs-content'>
                    {array.map(e => (
                        <div className='wcs-container-card'>
                            <div className='wcs-card'>
                                <div className='wcs-card-icon'>
                                    <i className="bi bi-archive-fill"></i>
                                </div>
                                <div className='wcs-card-text'>
                                    <p>146 quality checks</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Carousel>
        </div>
    );
}

export default WhyChoosenUs;