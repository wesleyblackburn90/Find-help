import React from "react";
import { useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
import { createReview, deleteReviews } from "../../store/business";
import './review.css';

function Review() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { businessId } = useParams()
  const currentUserId = useSelector((state) => state.session.user.id)
  const businesses = useSelector((state) => state.business)
  const business = businesses[businessId]
  const reviews = business.Reviews

  const [rating, setRating] = useState("")
  const [review, setReview] = useState("")
  const [showReviewForm, setShowReviewForm] = useState("hide-review-form")
  // const [reviewTotal, setReviewTotal] = useState(0)

  const updateRating = (e) => setRating(e.target.value)
  const updateReview = (e) => setReview(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      userId: currentUserId,
      businessId: businessId,
      rating,
      review
    }

    const createdReview = await dispatch(createReview(payload))
    if (createdReview) {
      // console.log(createdReview)
      // let reviewNums = reviews.map(obj => obj.rating)
      // setReviewTotal((reviewNums.reduce((a, b) => a + b, 0) + (createdReview.rating)) / (reviewNums.length))
      setShowReviewForm("hide-review-form")
      history.push(`/business/${businessId}`)
    }
  }

  function handleDelete(id) {
    dispatch(deleteReviews(id, businessId))
    history.push(`/business/${businessId}`)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setShowReviewForm("review-form")
  }

  const handleCancelClick = (e) => {
    e.preventDefault()
    setShowReviewForm("hide-review-form")
  }


  return (
    <div className="review">
      <div id="listOfReviews">
        {reviews?.map(({ id, rating, review, userId }) => (
          <div key={id} className="reviewCard">
            <h1>Rating: {rating}</h1>
            <h1>{review}</h1>
            {userId === currentUserId ? <button onClick={(e) => { e.preventDefault(); handleDelete(id) }} id="deleteReviewButton">Delete review</button> : <></>}
          </div>
        ))}
      </div>
      {/* {reviews} */}
      {/* <p>User Ratings: {Math.round(reviewTotal)}</p> */}
      <div id="reviewForm">
        <button onClick={handleClick} className="reviewFormButton">Leave a review</button>
        <div className={showReviewForm}>
          <form onSubmit={handleSubmit} id="leaveReviewInputs">
            <h3> Rating </h3>
            <select onChange={updateRating}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <h3> Review </h3>
            <input
              id="reviewBody"
              type="text"
              placeholder="Leave your review"
              value={review}
              onChange={updateReview} />
            <button type="submit" className="reviewFormButton">Submit review</button>
            <button onClick={handleCancelClick} className="reviewFormButton">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Review
