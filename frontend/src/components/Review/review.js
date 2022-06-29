import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
import { getAllReviews } from "../../store/review";
import './review.css';

function Review() {
  const dispatch = useDispatch()
  // const { businessId, userId } = useParams()
  const reviews = useSelector((state) => Object.values(state.review))
  // // const review = reviews[reviewId]
  // console.log(".....")
  // // console.log(reviewId)
  // console.log(businessId)
  // console.log(userId)
  // console.log(review)

  useEffect(() => {
    dispatch(getAllReviews())
  }, [dispatch])

  return (
    <div className="review">
      {reviews?.map(({ id, rating, review }) => (
        <div key={id} className="reviewCard">
          <h1>{id}</h1>
          <h1>{rating}</h1>
          <h1>{review}</h1>
        </div>
      ))}
    </div>
  )
}

export default Review
