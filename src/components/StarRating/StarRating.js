import React from 'react';
// import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from "react";
import './starrating.css'
import CommentDesign from '../CommentDesign/CommentDesign';
import { DataContext } from "../../context/DataContext";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function StarRating({id}) {
    
    const [currentValue, setCurrentValue] = useState(0);
    const [textComment, setTextCommnet] = useState('')
    const { userInfo } = useContext(DataContext);

    const [comment, setComment] = useState('')


    const navigate = useNavigate();


    const handleComment = (e) => {
        setTextCommnet(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textComment !== '' &&  userInfo !== null) {
            setComment(textComment)
            setCurrentValue(0)
            setTextCommnet('')
        } else if (!userInfo) {
            navigate('/login')
            console.log('bug',userInfo);
        } else {
            Swal.fire("please fill not require!");
        }
    }

    return (
        <>
            <div className="container-star-rating">
                <div className='sr-list'>
                    <h2> Comment </h2>
                    <div className='sr-item-star'>
                        {/* {stars.map((_, index) => {
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
                        })} */}
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
            <CommentDesign comment={comment} id={id}/>
        </>
    );
}

export default StarRating;