import React from 'react';
import './whyChoosenUs.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react'




function WhyChoosenUs(props) {


    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/whychoosen.json");
                const data = await response.json();
                setDatas(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);



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
                    {datas.map((data, index) => (
                        <div className='wcs-container-card'>
                            <div className='wcs-card'>
                                <div className='wcs-card-image'>
                                    <img src={data.image} alt={data.title} />
                                </div>
                                <div className='wcs-card-text'>
                                    <p>{data.title}</p>
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