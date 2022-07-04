import { csrfFetch } from "./csrf"

const GET_ALL_BUSINESSES = '/business/getAllBusinesses'
const CREATE_BUSINESS = '/business/createBusiness'
const UPDATE_BUSINESS = '/business/updateBusiness'
const DELETE_BUSINESS = '/business/deleteBusiness'
const CREATE_REVIEW = '/business/createReview'
const DELETE_REVIEW = '/business/deleteReview'

//action creator
const getBusinesses = (businesses) => {
  return {
    type: GET_ALL_BUSINESSES,
    businesses
  }
}

const createBusiness = (businesses) => {
  return {
    type: CREATE_BUSINESS,
    businesses
  }
}

const updateBusiness = (businesses, reviews) => {
  return {
    type: UPDATE_BUSINESS,
    payload: { businesses, reviews }
  }
}

const deleteBusiness = (business) => {
  return {
    type: DELETE_BUSINESS,
    business
  }
}

const createReviews = (review) => {
  return {
    type: CREATE_REVIEW,
    review,
  }
}

const deleteReview = (review, businessId) => {
  return {
    type: DELETE_REVIEW,
    payload: { review, businessId },
  }
}

//thunk action creator
export const getAllBusinesses = () => async (dispatch) => {
  const response = await csrfFetch("/api/business")

  if (response.ok) {
    const data = await response.json()
    dispatch(getBusinesses(data))
    return data
  }
}

export const createBusinesses = (data) => async (dispatch) => {
  const response = await csrfFetch("/api/business", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const business = await response.json()
  dispatch(createBusiness(business))
  return business
}

export const editBusiness = (data, reviews) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    const business = await response.json()
    dispatch(updateBusiness(business, reviews))
    return business
  }
}

export const deleteBusinesses = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${businessId}`, {
    method: 'delete',
  })

  if (response.ok) {
    const deletedBusiness = await response.json()
    dispatch(deleteBusiness(deletedBusiness))
    return deletedBusiness
  }
}

export const createReview = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${data.businessId}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const review = await response.json()
  dispatch(createReviews(review))
  return review
}

export const deleteReviews = (reviewId, businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/review/${reviewId}`, {
    method: 'delete',
  })

  if (response.ok) {
    dispatch(deleteReview(reviewId, businessId))
  }
}

//state object
const initialState = {}

//reducer
const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BUSINESSES: {
      const allBusinesses = {};
      action.businesses.forEach((business) => (allBusinesses[business.id] = business));
      return allBusinesses
    }
    case CREATE_BUSINESS: {
      const newState = {
        ...state,
        [action.businesses.id]: action.businesses
      };
      return { ...newState }
    }
    case UPDATE_BUSINESS:
      const reviews = action.payload.reviews
      action.payload.businesses["Reviews"] = reviews
      const newState = {
        ...state,
        [action.payload.businesses.id]: action.payload.businesses
      }
      return newState
    case DELETE_BUSINESS: {
      const newState = { ...state }
      delete newState[action.business.id]
      return newState
    }
    case CREATE_REVIEW: {
      const businessId = action.review.businessId
      const newState = JSON.parse(JSON.stringify(state))
      newState[businessId].Reviews.push(action.review)
      return newState
    }
    case DELETE_REVIEW: {
      const reviewId = action.payload.review
      const newState = { ...state }
      const deleteIndex = newState[action.payload.businessId].Reviews.indexOf(newState[action.payload.businessId].Reviews.find(obj => obj.id === reviewId))
      newState[action.payload.businessId].Reviews.splice(deleteIndex, 1)
      return newState
    }
    default:
      return state;
  }
}

export default businessReducer;
