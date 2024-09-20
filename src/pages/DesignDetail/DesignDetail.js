import React from 'react';
import StyleDetail from '../../components/StyleDetail/StyleDetail';
import StarRating from '../../components/StarRating/StarRating';
import CommentDesign from '../../components/CommentDesign/CommentDesign';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'



function DesignDetail(props) {
    const  {id}  = useParams();
    
    return (
        <div>
            <StyleDetail id={id} />
            {/* <StarRating/>
            <CommentDesign id={id}/> */}
        </div>
    );
}

export default DesignDetail;