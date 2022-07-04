import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session'
import { useDispatch } from 'react-redux';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  let demoUser = null;
  let sessionLinks;
  let browse;

  const handleSubmit = (e) => {
    e.preventDefault();
    const credential = "demoUser";
    const password = "password";

    dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        return data;
      });
    history.push("/")
  }

  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
    browse = (
      <>
        <NavLink to="/business" id="browse-button">Browse</NavLink>
      </>
    )
  } else if (demoUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
    browse = (
      <>
        <NavLink to="/business" id="browse-button">Browse</NavLink>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" id="loginButton">Log In</NavLink>
        <NavLink to="/signup" id="signUpButton">Sign Up</NavLink>
        <button onClick={handleSubmit} id="demoButton">Demo</button>
      </>
    );
    browse = (
      <>
        <p>Log in or click Demo to start browsing!</p>
      </>
    )
  }

  return (
    <ul>
      <li id="title-bar">
        <img id="title" src="../../images/title.jpg" alt="hospital"></img>
        <div id="home-profile-buttons">
          <NavLink exact to="/" id="homeButton">Home</NavLink>
          {isLoaded && sessionLinks}
        </div>
      </li>
      <div id="browse">
        <h1>Let's get started!</h1>
        {browse}
      </div>
    </ul>
  );
}

export default Navigation;
