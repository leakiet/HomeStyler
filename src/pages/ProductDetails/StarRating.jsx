import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Số sao đầy đủ
  const hasHalfStar = rating % 1 !== 0; // Kiểm tra xem có nửa sao không
  const totalStars = 5; // Tổng số sao hiển thị

  return (
    <div className="feedback-rating">
      {Array.from({ length: totalStars }, (v, i) => {
        if (i < fullStars) {
          return <i key={i} className="fas fa-star"></i>;
        } else if (i === fullStars && hasHalfStar) {
          return <i key={i} className="fas fa-star-half-alt"></i>;
        } else {
          return <i key={i} className="far fa-star"></i>;
        }
      })}
    </div>
  );
};

export default StarRating;
