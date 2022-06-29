import { csrfFetch } from "./csrf"

const GET_ALL_REVIEWS = '/business/getAllReviews'
// const CREATE_REVIEW = '/business/createReview'
// // const UPDATE_BUSINESS = '/business/updateBusiness'
// const DELETE_REVIEW = '/business/deleteReview'

//action creator
const getReview = (reviews) => {
  return {
    type: GET_ALL_REVIEWS,
    reviews
  }
}
// const createBusiness = (businesses) => {
//   return {
//     type: CREATE_BUSINESS,
//     businesses
//   }
// }
// const updateBusiness = (businesses) => {
//   return {
//     type: UPDATE_BUSINESS,
//     businesses
//   }
// }
// const deleteBusiness = (business) => {
//   return {
//     type: DELETE_BUSINESS,
//     business
//   }
// }

//thunk action creator
export const getAllReviews = () => async (dispatch) => {
  const response = await csrfFetch(`/api/business`)

  if (response.ok) {
    const data = await response.json()
    dispatch(getReview(data))
    return data
  }
}

// export const createBusinesses = (data) => async (dispatch) => {
//   const response = await csrfFetch("/api/business", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })

//   const business = await response.json()
//   dispatch(createBusiness(business))
//   return business
// }

// export const deleteBusinesses = (businessId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/business/${businessId}`, {
//     method: 'delete',
//   })

//   if (response.ok) {
//     const { deletedBusiness } = await response.json()
//     dispatch(deleteBusiness(deletedBusiness))
//     return deletedBusiness
//   }
// }

//state object
const initialState = {}

//reducer
const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS: {
      const allReviews = {};
      action.reviews.forEach((review) => (allReviews[review.id] = review));
      return { ...allReviews };
    }
    // case CREATE_BUSINESS: {
    //   const newState = {
    //     ...state,
    //     [action.businesses.id]: action.businesses
    //   };
    //   return newState
    // }
    // case DELETE_BUSINESS: {
    //   const newState = { ...state }
    //   delete newState[action.business]
    //   return newState
    // }
    default:
      return state;
  }
}

export default reviewReducer;
