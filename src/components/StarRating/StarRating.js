import React from 'react';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from "react";
import './starrating.css'
import CommentDesign from '../CommentDesign/CommentDesign';
import { DataContext } from "../../context/DataContext";
import { useNavigate } from 'react-router-dom';


function StarRating({id}) {
    

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [textComment, setTextCommnet] = useState('')
    const [star, setStar] = useState(0)
    const { userInfo } = useContext(DataContext);

    const [comment, setComment] = useState('')

    const stars = Array(5).fill(1)

    const navigate = useNavigate();

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleComment = (e) => {
        setTextCommnet(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentValue > 0 && userInfo !== null) {
            setStar(currentValue)
            setComment(textComment)
            setCurrentValue(0)
            setTextCommnet('')
        } else if (!userInfo) {
            navigate('/login')
            console.log('bug',userInfo);
        } else {
            alert('cuc')
        }
    }

    return (
        <>
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
                        onChange={handleComment}
                        value={textComment}
                    />
                    <div className='sr-item-btn'>
                        <button type="button" className="btn btn-primary " onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <CommentDesign comment={comment} star={star} id={id}/>
        </>
    );
}

export default StarRating;