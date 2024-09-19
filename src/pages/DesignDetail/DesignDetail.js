import React from 'react';
import StyleDetail from '../../components/StyleDetail/StyleDetail';
import StarRating from '../../components/StarRating/StarRating';
import CommentDesign from '../../components/CommentDesign/CommentDesign';

function DesignDetail(props) {
    
    return (
        <div>
            <StyleDetail id={1}/>
            <StarRating/>
            <CommentDesign id={1}/>
        </div>
    );
}

export default DesignDetail;