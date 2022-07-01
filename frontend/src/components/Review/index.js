import React from "react";
import { useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
import { createReview } from "../../store/business";
import './review.css';

function Review() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { businessId } = useParams()
  const userId = useSelector((state) => state.session.user.id)
  const reviews = useSelector((state) => state.business[businessId].Reviews)

  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  const updateRating = (e) => setRating(e.target.value)
  const updateReview = (e) => setReview(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      userId: userId,
      businessId: businessId,
      rating,
      review
    }

    const createdReview = await dispatch(createReview(payload))

    if (createdReview) {
      console.log(reviews, "<===================")
      history.push(`/business/${businessId}`)
    }
  }

  return (
    <div className="review">
      {/* {reviews} */}
      {reviews?.map(({ id, rating, review }) => (
        <>
          <div key={id} className="reviewCard">
            <h1>{rating}</h1>
            <h1>{review}</h1>
            <button>Delete review</button>
          </div>
        </>
      ))}
      <button>Leave a review</button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="rating"
          required
          value={rating}
          onChange={updateRating} />
        <input
          type="text"
          placeholder="review"
          value={review}
          onChange={updateReview} />
        <button type="submit">Submit review</button>
      </form>
    </div>
  )
}

export default Review
