import React from 'react';
import StyleDetail from '../../components/StyleDetail/StyleDetail';
import StarRating from '../../components/StarRating/StarRating';
import CommentDesign from '../../components/CommentDesign/CommentDesign';

function DesignDetail(props) {
    return (
        <div>
            <StyleDetail/>
            <StarRating/>
            <CommentDesign/>
        </div>
    );
}

export default DesignDetail;