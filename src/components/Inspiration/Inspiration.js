import React, { useEffect, useState } from "react";
import "./inspiration.css";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function Inspiration(props) {
  const [inspirs, setInspirs] = useState([]);
  useEffect(() => {
    fetch("data/inspiration.json")
      .then((res) => res.json())
      .then((data) => setInspirs(data))
      .catch((err) => console.log(err));
  }, []);
  console.log("inspirs: ", inspirs);
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
    <div className="container-inspiration">
      <div className="inspiration-title">
        <h3>Inspiration for home interior designs</h3>
        <p>
          Give your home a new look with these interior design ideas curated for
          you
        </p>
      </div>
      <div className="container-inspiration-list">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={true}
          arrows={true}
        >
          {inspirs.map((itemData, index) => (
            <div key={index} className="carousel-item">
              <div className="top">
                {itemData.item.top.map((topItem, topIndex) => (
                  <div
                    key={topIndex}
                    className={`top-item top-image-${topItem.typeSize}`}
                  >
                    <img src={topItem.image} alt={topItem.designId} />
                    <div className="label">{topItem.label}</div>
                  </div>
                ))}
              </div>
              <div className="bottom mt-2">
                {itemData.item.bottom.map((bottomItem, bottomIndex) => (
                  <div
                    key={bottomIndex}
                    className={`bottom-item bottom-image-${bottomItem.typeSize}`}
                  >
                    <img src={bottomItem.image} alt={bottomItem.designId} />
                    <div className="label">{bottomItem.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>

        {/* <div className='inspiration-list'>
        <div className='inspiration-item-top'>
            <img alt='img' className='img-top-1' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <img alt='img' className='img-top-2' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <img alt='img' className='img-top-3' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        </div>
        
        <div className='inspiration-item-bottom'>
            <img alt='img' className='img-bottom-1' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <img alt='img' className='img-bottom-2' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <img alt='img' className='img-bottom-3' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        </div>
    </div> */}
      </div>
    </div>
  );
}

export default Inspiration;
