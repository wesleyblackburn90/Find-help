import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getAllBusinesses } from "../../store/business";
import './BusinessList.css';

function BusinessList() {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => Object.values(state.business))

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  return (
    <>
      <h1>Businesses for you</h1>
      <div className="businesses">
        {businessList?.map(({ id, businessName, picture, description }) => (
          <div key={id} className="businessCard">
            <NavLink to={`/business/${id}`} className="businessName" key={id}>{businessName}</NavLink>
            <img key={id} alt="A building" className="businessPic" src={picture}></img>
            <p key={id} className="businessDescription">{description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default BusinessList;
