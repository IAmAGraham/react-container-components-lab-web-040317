import React, {Component} from 'react';

const Review = ({ display_title }) => {
  return (
    <div className="review">
      <h1>{display_title}</h1>
    </div>
  )
}


const MovieReviews = ({ reviews }) => {
  debugger
  return (
    <div className="review-list">
    {reviews.map(Review )}
    </div>
  )
}
MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
