const GET_ALL_BUSINESSES = '/business/getAllBusinesses'
const CREATE_BUSINESS = '/business/createBusiness'
// const UPDATE_BUSINESS = '/business/updateBusiness'
// const DELETE_BUSINESS = '/business/deleteBusiness'

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
// const updateBusiness = (businesses) => {
//   return {
//     type: UPDATE_BUSINESS,
//     businesses
//   }
// }
// const deleteBusiness = (businesses) => {
//   return {
//     type: DELETE_BUSINESS,
//     businesses
//   }
// }

//thunk action creator
export const getAllBusinesses = () => async (dispatch) => {
  const response = await fetch("/api/business")

  if (response.ok) {
    const data = await response.json()
    dispatch(getBusinesses(data))
    return data
  }
}

export const createBusinesses = (data) => async (dispatch) => {
  const response = await fetch("/api/business", {
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

//state object
const initialState = {}

//reducer
const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BUSINESSES: {
      const allBusinesses = {};
      action.businesses.forEach((business) => (allBusinesses[business.id] = business));
      return allBusinesses;
    }
    case CREATE_BUSINESS: {
      console.log(action.business)
      const newState = {
        ...state,
        [action.business.id]: action.business
      };
      return newState
    }
    default:
      return state;
  }
}

export default businessReducer;
