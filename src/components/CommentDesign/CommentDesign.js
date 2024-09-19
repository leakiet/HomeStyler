import React from 'react';
import './commentdesign.css'
function CommentDesign(props) {

    const array = [
        1,2,3,4,5,6,7,
    ]
    return (
        <div className='container-comment-design'>
            {array.map(e=>(

            <div className='cd-list'>
                <div className='item-list-customer'>
                    <div className='cd-item-avatar'>
                        <img src='https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/kitchen-1711966833-sXfwY/ki77-1719575432-W5uin.jpg' alt='' />
                    </div>
                    <div className='item-comment'>
                        <div className='item-name'>
                            <h3>quyen</h3>
                        </div>
                        <div className='item-comment-text'>
                            <p>so good!  so good! so good!</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default CommentDesign;