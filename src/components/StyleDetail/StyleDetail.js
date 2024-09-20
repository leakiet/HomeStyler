import React, { useContext } from "react";
import "./styledetail.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

function StyleDetail(props) {
    const [designStyles, setDesignStyles] = useState([]);
    const { userInfo, favoriteStyle, setFavoriteStyle } = useContext(DataContext);
    console.log("favoriteStyle: ", favoriteStyle);
    console.log("userInfo: ", userInfo);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/roomtype.json");
                const data = await response.json();
                const foundStyle = data.find((item) => item.id === parseInt(props.id));
                console.log("foundStyle: ", foundStyle);
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
        console.log(designStyles);
    };


    function handleAddFavorite() {
        if (userInfo) {
            setFavoriteStyle(pre => [...pre, designStyles]);
        } else {
            let data = {
                message: "Please log in to add this product to your wishlist.",
                type: "favoriteStyle",
                data: designStyles
            }
            navigate((localStorage.getItem('username')) ? ('/userpage') : ('/login'), { state: data });
        }
    }


    return (
        <>
            <div className="container-styledetail">
                <div className="row container-detail-list">
                    <div className="sd-image-detail col-lg-7 col-sm-6">
                        {designStyles.image && designStyles.image.length > 0 ? (
                            <img
                                className="img-detail"
                                src={designStyles.image}
                                alt={designStyles.name}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                        <i
                            onClick={handleAddFavorite}
                            class="fa-solid fa-bookmark icon-favorite"
                        ></i>
                    </div>
                    <div className="sd-list-item col-lg-5 col-sm-6">
                        <div className="sd-list-item-title">
                            <h4 className="mt-2">{designStyles.name}</h4>
                        </div>
                        {/* <div className='star-rating'>
                            <h4>Star Rating</h4>
                            {designStyles.rating && designStyles.rating.averageStars !== undefined && (
                                <>
                                    {Array(Math.floor(designStyles.rating.averageStars)).fill().map((_, index) => (
                                        <i key={index} style={{ color: 'gold' }} className="bi bi-star-fill"></i>
                                    ))}
                                    {designStyles.rating.averageStars % 1 !== 0 && (
                                        <i style={{ color: 'gold' }} className="bi bi-star-half"></i>
                                    )}
                                </>
                            )}
                        </div> */}
                        <div className="sd-list-item-detail">
                            <div className="item-design-detail">
                                <p>
                                    <span>
                                        {" "}
                                        {designStyles.type
                                            ? designStyles.type
                                            : "No layout available"}
                                    </span>{" "}
                                    Design Details:
                                </p>
                            </div>

                            <div className="item-text">
                                <div className="item-title">Layout:</div>
                                <p>
                                    {designStyles.layout
                                        ? designStyles.layout
                                        : "No layout available"}
                                </p>
                            </div>
                            <div className="item-text">
                                <div className="item-title">Room Dimension:</div>
                                <p>
                                    {designStyles.size ? designStyles.size : "No size available"}
                                </p>
                            </div>
                            <div className="item-text">
                                <div className="item-title">Style:</div>
                                <p>
                                    {designStyles.style ? designStyles.style : "No style available"}
                                </p>
                            </div>
                            <div className="item-text-list">
                                <div className="item-title-list">Colour:</div>
                                {designStyles.colour &&
                                    designStyles.colour.map((corlor, index) => (
                                        <p key={index}> - {corlor}</p>
                                    ))}
                            </div>
                            <div className="item-text-list">
                                <div className="item-title-list">Shutter finish:</div>
                                {designStyles.shutterFinishs &&
                                    designStyles.shutterFinishs.map((shutterFinish, index) => (
                                        <p key={index}> - {shutterFinish}</p>
                                    ))}
                            </div>
                            <div className="item-text">
                                <div className="item-title">Countertop Material:</div>
                                <p>
                                    {designStyles.countertopMaterial
                                        ? designStyles.countertopMaterial
                                        : "No Countertop Material available"}
                                </p>
                            </div>
                            <div className="item-text">
                                <div className="item-title">Storage Features:</div>
                                <p>
                                    {designStyles.storageFeatures
                                        ? designStyles.storageFeatures
                                        : "No Storage Features available"}
                                </p>
                            </div>
                            <div className="item-text-list">
                                <div className="item-title-list">Special Features:</div>
                                {designStyles.specialFeatures &&
                                    designStyles.specialFeatures.map((specialFeature, index) => (
                                        <p key={index}> - {specialFeature}</p>
                                    ))}
                            </div>
                            <div className="item-size-design">
                                <div className="sd-size-title">Size:</div>
                                <div className="sd-text">
                                    <p>
                                        {designStyles.size ? designStyles.size : "No size available"}
                                    </p>
                                </div>
                            </div>

                            <div className="item-description">
                                1Flat 10-year warranty on modular and semi-modular products. For
                                full scope, visit here | 2For modular kitchens, wardrobes and
                                storage
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-price">
                    <div className="sd-price-title">Price: </div>
                    <div className="sd-number-price">
                        <p>
                            {designStyles.price ? designStyles.price : "No price available"}$
                        </p>
                    </div>
                </div>
                <div>

                    <Link to="/free-quote" className="sd-btn-gfq">
                        <button
                            type="button"
                            className="btn btn-danger rounded-pill"
                            onClick={handleGet}
                        >
                            Get free quote
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default StyleDetail;