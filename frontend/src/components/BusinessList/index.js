import React, { useState } from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getAllBusinesses } from "../../store/business";
import BusinessForm from "../BusinessForm";
import './BusinessList.css';

function BusinessList() {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => Object.values(state.business))


  const [showForm, setShowForm] = useState("show-form")

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    setShowForm("show")
  }

  const handleCancelClick = (e) => {
    e.preventDefault()
    setShowForm("show-form")
  }

  return (
    <>
      <h1>Businesses for you</h1>
      <div className="business-div">
        <div className="businesses">
          {businessList?.map(({ id, businessName, picture, description }) => (
            <div key={id} className="businessCard">
              <NavLink to={`/business/${id}`}>
                <img alt="A building" className="businessPic" src={picture}></img>
              </NavLink>
              <NavLink to={`/business/${id}`} className="businessName" key={businessName}>{businessName}</NavLink>
              <p className="businessDescription">{description}</p>
            </div>
          ))}
        </div>
        <div className="business-form-div">
          <h1 id="addBusinessHeader">Want to add YOUR business?</h1>
          <button onClick={handleClick} id="getStartedbutton">Get started today</button>
          <div id={showForm} className="business-form">
            <BusinessForm />
            <button type="button" id="cancelButton" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessList;
