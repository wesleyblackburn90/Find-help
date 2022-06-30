import { csrfFetch } from "./csrf"

const GET_ALL_BUSINESSES = '/business/getAllBusinesses'
const CREATE_BUSINESS = '/business/createBusiness'
const UPDATE_BUSINESS = '/business/updateBusiness'
const DELETE_BUSINESS = '/business/deleteBusiness'

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
const updateBusiness = (businesses) => {
  return {
    type: UPDATE_BUSINESS,
    businesses
  }
}
const deleteBusiness = (business) => {
  return {
    type: DELETE_BUSINESS,
    business
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

export const editBusiness = data => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  // console.log(data, "<=== data")
  // console.log(response, "<=== response")

  if (response.ok) {
    const business = await response.json()
    dispatch(updateBusiness(business))
    return business
  }
}

export const deleteBusinesses = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${businessId}`, {
    method: 'delete',
  })

  if (response.ok) {
    const { deletedBusiness } = await response.json()
    dispatch(deleteBusiness(deletedBusiness))
    return deletedBusiness
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
      return {
        ...state,
        [action.businesses.id]: action.businesses
      }
    case DELETE_BUSINESS: {
      const newState = { ...state }
      delete newState[action.businessId]
      return newState
    }
    default:
      return state;
  }
}

export default businessReducer;
