const GET_ALL_BUSINESSES = '/business/getAllBusinesses'

//action creator
const getBusinesses = (businesses) => {
  return {
    type: GET_ALL_BUSINESSES,
    businesses
  }
}

//thunk action creator
export const getAllBusinesses = () => async (dispatch) => {
  const response = await fetch("/api/business")

  if (response.ok) {
    const data = await response.json()
    dispatch(getBusinesses(data))
    return data
  }
}

//state object
const initialState = {}

//reducer
const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BUSINESSES: {
      const newState = {};
      action.businesses.forEach((business) => (newState[business.id] = business));
      return newState;
    }
    default:
      return state;
  }
}

export default businessReducer;
