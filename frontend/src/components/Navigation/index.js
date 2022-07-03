import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
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
        <NavLink to="/business" id="browse-button">Browse</NavLink>
      </div>
    </ul>
  );
}

export default Navigation;
