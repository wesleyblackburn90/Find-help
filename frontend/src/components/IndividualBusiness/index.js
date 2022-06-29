import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getAllBusinesses, deleteBusinesses } from "../../store/business";
import Review from "../Review/review"
import './IndividualBusiness.css';

function Business() {
  const dispatch = useDispatch();
  const { businessId } = useParams()
  const businesses = useSelector((state) => Object.values(state.business))
  const business = businesses[businessId]

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  return (
    <>
      {(business && businesses) ?
        <>
          <h1>{business.businessName}</h1>
          <img alt="health facility" src={business.picture}></img>
          <p>{business.description}</p>
          {/* <Review /> */}
          <button onClick={() => dispatch(deleteBusinesses(business.id))}>Delete business</button>
        </>
        : null
      }
    </>
  )
}

export default Business;
