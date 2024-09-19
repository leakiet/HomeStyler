import React from 'react';
import './inspiration.css'

function Inspiration(props) {
    return (
        <div className="container-inspiration">
            <div className='inspiration-title'>
                <h3>Inspiration for home interior designs</h3>
                <p>Give your home a new look with these interior design ideas curated for you</p>
            </div>
            <div className='container-inspiration-list'>

                <div className='inspiration-list'>
                    <div className='inspiration-item-top'>
                        <div className='inspiration-item-image'>
                            <img alt='img' className='img-top-1' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            <span className='image-text'>Living Room</span>
                        </div>
                        <div className='inspiration-item-image'>
                            <img alt='img' className='img-top-2' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            <span className='image-text'>Living Room</span>
                        </div>
                        <div className='inspiration-item-image'>
                            <img alt='img' className='img-top-3' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            <span className='image-text'>Living Room</span>
                        </div>
                    </div>

                    <div className='inspiration-item-bottom'>
                        <div className='inspiration-item-image'>
                            <img alt='img' className='img-bottom-1' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            <span className='image-text'>Living Room</span>
                        </div>
                        <div className='inspiration-item-image'>
                            <img alt='img' className='img-bottom-2' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            <span className='image-text'>Living Room</span>
                        </div>
                        <div className='inspiration-item-image'>
                            <img alt='img' className='img-bottom-3' src='https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            <span className='image-text'>Living Room</span>
                        </div>
                    </div>
                </div>
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