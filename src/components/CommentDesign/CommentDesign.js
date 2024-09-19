import React from 'react';
import './commentdesign.css'
import { useEffect, useState } from 'react'
function CommentDesign(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data/products.json");
                const data = await response.json();
                setComments(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);




    return (
        <div className='container-comment-design'>
            {comments.length > 0 && comments.map((comment, index) => (
                <div className='cd-list' key={index}>
                    {comment.id === props.id && comment.reviews && comment.reviews.map((review) => (
                        <div key={review.userId} className='item-list-customer'>
                            <div className='cd-item-avatar'>
                                <img src='https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/kitchen-1711966833-sXfwY/ki77-1719575432-W5uin.jpg' alt='Avatar' />
                            </div>
                            <div className='item-comment'>
                                <div className='item-name'>
                                    <h3>{review.userName}</h3>
                                </div>
                                <div className='item-comment-text'>
                                    <p>{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default CommentDesign;