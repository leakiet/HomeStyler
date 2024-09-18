import React from 'react';
import './whyChoosenUs.css'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';



function WhyChoosenUs(props) {
    const array = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="container-why-choosen-us">
            <div className='wcs-title'>
                <h2>Why Choose Us</h2>
            </div>
            
            <Carousel responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                autoPlay={true}
            >
                <div className='wcs-content'>
                    {array.map(e => (
                        <div className='wcs-container-card'>
                            <div className='wcs-card'>
                                <div className='wcs-card-icon'>
                                    <i class="bi bi-archive-fill"></i>
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