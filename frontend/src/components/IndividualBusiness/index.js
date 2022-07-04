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
  const user = useSelector((state) => state.session.user)

  let owner;




  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  const handleDelete = async () => {
    await dispatch(deleteBusinesses(business.id)).then(history.push('/business'))
  }

  if (user.id === business.ownerId) {
    owner = (
      <>
        <EditBusinessForm business={business} />
        <div>
          <p id="deleteWarning"> WARNING! CLICKING THIS BUTTON WILL DELETE ALL OF THE INFORMATION FOR YOUR BUSINESS. ARE YOU SURE YOU WANT TO PROCEED?</p>
          <button onClick={handleDelete} id="deleteBusinessButton">Delete business</button>
        </div>
      </>
    )
  }
  else {
    owner = (
      <>
        <h2>If this is your business, log in to edit!</h2>
      </>
    )
  }

  return (
    <>
      {(business) ?
        <div className="individualBusiness">
          <div id="individualBusinessTitle">
            <h1>{business.businessName}</h1>
            <p>{business.description}</p>
          </div>
          <div className="singleBusinessCard">
            <img alt="health facility" src={business.picture} className="individualBusinessPic"></img>
            <div className="address">
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{business.state}</p>
            </div>
          </div>
          <Review />
          {owner}
        </div>
        : null
      }
    </>
  )
}

export default IndividualBusiness;
