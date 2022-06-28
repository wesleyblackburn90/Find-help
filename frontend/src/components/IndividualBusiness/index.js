import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getAllBusinesses } from "../../store/business";
import './IndividualBusiness.css';

function Business() {
  const dispatch = useDispatch();
  const { businessId } = useParams()
  console.log(".........")
  console.log(businessId)
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
        </>
        : null
      }
    </>
  )
}

export default Business;
