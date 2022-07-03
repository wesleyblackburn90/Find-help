import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { getAllBusinesses, deleteBusinesses } from "../../store/business";
import EditBusinessForm from "../EditBusinessForm";
import Review from "../Review"
import './IndividualBusiness.css';

function IndividualBusiness() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { businessId } = useParams()
  const business = useSelector((state) => (state.business[businessId]))


  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  function handleDelete() {
    const deletedBusiness = dispatch(deleteBusinesses(business.id))
    if (deletedBusiness) {
      history.push('/business')
    }
  }


  return (
    <>
      {(business) ?
        <>
          <h1>{business.businessName}</h1>
          <img alt="health facility" src={business.picture}></img>
          <p>{business.description}</p>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state}</p>
          <Review />
          <EditBusinessForm business={business} />
          <button onClick={handleDelete}>Delete business</button>
        </>
        : null
      }
    </>
  )
}

export default IndividualBusiness;
