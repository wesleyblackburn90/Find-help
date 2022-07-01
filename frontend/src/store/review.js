import { csrfFetch } from "./csrf"

// const GET_ALL_REVIEWS = '/business/getAllReviews'
const CREATE_REVIEW = '/business/createReview'
// // const UPDATE_BUSINESS = '/business/updateBusiness'
// const DELETE_REVIEW = '/business/deleteReview'

//action creator
const createReviews = (review) => {
  return {
    type: CREATE_REVIEW,
    review,
  }
}
// const deleteBusiness = (business) => {
//   return {
//     type: DELETE_BUSINESS,
//     business
//   }
// }


// export const createReview = (data) => async (dispatch) => {
//   const response = await csrfFetch(`/api/business/${data.businessId}`, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })

//   const review = await response.json()
//   dispatch(createReviews(review))
//   return review
// }


// //state object
// const initialState = {}

//reducer
// const reviewReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_REVIEW: {
//       console.log(state, "<== state")
//       console.log(action.review, "<===action.review")
//       console.log(action, "<=== action")
//       const newState = {
//         ...state,
//         [action.review.id]: action.review
//       };
//       console.log(newState, "<===newstate")
//       return newState
//     }
//     // case DELETE_BUSINESS: {
//     //   const newState = { ...state }
//     //   delete newState[action.business]
//     //   return newState
//     // }
//     default:
//       return state;
//   }


// export default reviewReducer;
