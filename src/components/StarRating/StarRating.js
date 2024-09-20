import React from 'react';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import './starrating.css'

function StarRating(props) {

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div className="container-star-rating">
            <div className='sr-list'>
                <h2> React Ratings </h2>
                <div className='sr-item-star'>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={40}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                            />
                        )
                    })}
                </div>
                <textarea
                    placeholder="What's your experience?"
                    className='sr-item-input'
                />
                <div className='sr-item-btn'>
                    <button type="button" className="btn btn-primary ">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default StarRating;