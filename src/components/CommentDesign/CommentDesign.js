import React, { useContext, useEffect, useState } from 'react';
import './commentdesign.css';
import { DataContext } from "../../context/DataContext";

function CommentDesign({ comment, id }) {
    const [commentUser, setCommentUser] = useState([]);
    const { userInfo } = useContext(DataContext);



    // Lấy dữ liệu từ JSON file
    const fetchData = async () => {
        try {
            const response = await fetch("/data/roomtype.json");
            const data = await response.json();
            const product = data.find((item) => item.id === parseInt(id));
            if (product && product.reviews) {
                setCommentUser(product.reviews);
                console.log(setCommentUser);

            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        if (comment ) {
            const newComment = {
                comment: comment,
                userName: userInfo ? userInfo.loginUsername : 'undefined user',
                avatar: '/IMAGES/avatar/avatar.jpeg'
            };

            setCommentUser((prevComments) => [...prevComments, newComment]);
        }
    }, [comment, userInfo]);


    return (
        <div className='container-comment-design'>
            {commentUser.length > 0 && commentUser.map((review, index) => (
                <div className='cd-list' key={index}>
                    <div className='item-list-customer'>
                        <div className='cd-item-avatar'>
                            <img src={review.avatar || '/IMAGES/avatar/avatar.jpeg'} alt='Avatar' />
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
                </div>
            ))}
        </div>
    );
}

export default CommentDesign;
