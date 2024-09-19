import React from 'react';
import './styledetail.css'
import { useEffect, useState } from 'react'


function StyleDetail(props) {

    const [designStyles, setDesignStyles] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data/designStyle.json");
                const data = await response.json();
                const foundStyle = data.find(item => item.id === props.id);

                if (foundStyle) {
                    setDesignStyles(foundStyle);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [props.id]);

    const handleGet = () => {
        console.log(designStyles)
    }



    return (
        <div className='container-styledetail'>
            <div className='container-detail-list'>
                <div className='sd-image-detail'>
                    {designStyles.image && designStyles.image.length > 0 ? (
                        <img src={designStyles.image} alt={designStyles.name} />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
                <div className='sd-list-item'>
                    <div className='sd-list-item-title'>
                        <h2>{designStyles.name}</h2>
                    </div>
                    <div className='star-rating'>
                        <h4>Star Rating</h4>
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <div className='sd-list-item-detail'>
                        <div className='item-design-detail'>
                            <p><span> {(designStyles.type) ? designStyles.type : "No layout available"}</span> Design Details:</p>
                        </div>
                        <div className='item-text'>
                            <div className='item-title'>
                                Layout:
                            </div>
                            <p>
                                {(designStyles.layout) ? designStyles.layout : "No layout available"}
                            </p>
                        </div>
                        <div className='item-text'>
                            <div className='item-title'>
                                Room Dimension:
                            </div>
                            <p>
                            {(designStyles.size) ? designStyles.size : "No size available"}
                            </p>
                        </div>
                        <div className='item-text'>
                            <div className='item-title'>
                                Style:
                            </div>
                            <p>
                            {(designStyles.style) ? designStyles.style : "No style available"}
                            </p>
                        </div>
                        <div className='item-text-list'>
                            <div className='item-title-list'>
                                Colour:
                            </div>
                            {designStyles.colour && designStyles.colour.map((corlor, index) => (
                                <p key={index}> - {corlor}</p>
                            ))}
                        </div>
                        <div className='item-text-list'>
                            <div className='item-title-list'>
                                Shutter finish:
                            </div>
                            {designStyles.shutterFinishs && designStyles.shutterFinishs.map((shutterFinish, index) => (
                                <p key={index}> - {shutterFinish}</p>
                            ))}
                        </div>
                        <div className='item-text'>
                            <div className='item-title'>
                                Countertop Material:
                            </div>
                            <p>
                                {(designStyles.countertopMaterial) ? designStyles.countertopMaterial : "No Countertop Material available"}
                            </p>
                        </div>
                        <div className='item-text'>
                            <div className='item-title'>
                                Storage Features:
                            </div>
                            <p>
                                {(designStyles.storageFeatures) ? designStyles.storageFeatures : "No Storage Features available"}
                            </p>
                        </div>
                        <div className='item-text-list'>
                            <div className='item-title-list'>
                                Special Features:
                            </div>
                            {designStyles.specialFeatures && designStyles.specialFeatures.map((specialFeature, index) => (
                                <p key={index}> - {specialFeature}</p>
                            ))}
                        </div>
                        <div className='item-size-design'>
                            <div className='sd-size-title'>
                                Size:
                            </div>
                            <div className='sd-text'>
                                <p>
                                    {(designStyles.size) ? designStyles.size : "No size available"}
                                </p>
                            </div>
                        </div>
                        <div className='item-description'>
                            1Flat 10-year warranty on modular and semi-modular products. For full scope, visit here | 2For modular kitchens, wardrobes and storage
                        </div>

                    </div>
                </div>
            </div>
            <div className='sd-btn-gfq'>
                <button type="button" className="btn btn-danger rounded-pill" onClick={handleGet}>Get free quote</button>
            </div>
        </div>
    );
}

export default StyleDetail;