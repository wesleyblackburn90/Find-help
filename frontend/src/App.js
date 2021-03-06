import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import BusinessList from "./components/BusinessList";
import IndividualBusiness from "./components/IndividualBusiness"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/business">
            <BusinessList />
          </Route>
          <Route path="/business/:businessId">
            <IndividualBusiness />
          </Route>
        </Switch>
      )}
      {/* <div>
        <h1>This is the footer</h1>
      </div> */}
    </>
  );
}

export default App;
