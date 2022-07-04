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

  const handleDelete = async () => {
    await dispatch(deleteBusinesses(business.id)).then(history.push('/business'))

    // if (deletedBusiness) {
    //   history.push('/business')
    // }
  }


  return (
    <>
      {(business) ?
        <div className="individualBusiness">
          <h1>{business.businessName}</h1>
          <p>{business.description}</p>
          <div className="singleBusinessCard">
            <img alt="health facility" src={business.picture} className="individualBusinessPic"></img>
            <div className="address">
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{business.state}</p>
            </div>
          </div>
          <Review />
          <EditBusinessForm business={business} />
          <button onClick={handleDelete}>Delete business</button>
        </div>
        : null
      }
    </>
  )
}

export default IndividualBusiness;
