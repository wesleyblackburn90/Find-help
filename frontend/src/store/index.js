import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { csrfFetch, restoreCSRF } from "./csrf";
import thunk from "redux-thunk";
import * as sessionActions from './session';
import sessionReducer from "./session";
import businessReducer from "./business";
import reviewReducer from "./review";


const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  business: businessReducer,
  review: reviewReducer
});

let enhancer;

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}



if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


export default configureStore;
