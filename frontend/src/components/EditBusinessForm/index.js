import React, { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { editBusiness, getAllBusinesses } from "../../store/business";


const EditBusinessForm = ({ business }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const businesses = useSelector((state) => state.business)
  const businessInfo = businesses[business.id]
  const reviews = businessInfo.Reviews
  const [businessName, setBusinessName] = useState(business.businessName)
  const [description, setDescription] = useState(business.description)
  const [picture, setPicture] = useState(business.picture)
  const [address, setAddress] = useState(business.address)
  const [city, setCity] = useState(business.city)
  const [state, setstate] = useState(business.state)
  const [zipcode, setZipcode] = useState(business.zipcode)

  const updateBusinessName = (e) => setBusinessName(e.target.value)
  const updateDescription = (e) => setDescription(e.target.value)
  const updatePicture = (e) => setPicture(e.target.value)
  const updateAddress = (e) => setAddress(e.target.value)
  const updateCity = (e) => setCity(e.target.value)
  const updateState = (e) => setstate(e.target.value)
  const updateZipcode = (e) => setZipcode(e.target.value)

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      ...business,
      businessName,
      description,
      picture,
      address,
      city,
      state,
      zipcode
    }


    dispatch(editBusiness(payload, reviews))
    history.push(`/business/${business.id}`)
  }

  const handleCancelClick = (e) => {
    e.preventDefault()
    // hideForm()
  }

  return (
    <section className="edit-business-form">
      <form className="business-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="BusinessName"
          required
          value={businessName}
          onChange={updateBusinessName} />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={updateDescription} />
        <input
          type="text"
          placeholder="imageUrl"
          value={picture}
          onChange={updatePicture} />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={updateAddress} />
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={updateCity} />
        <input
          type="text"
          placeholder="state"
          value={state}
          onChange={updateState} />
        <input
          type="number"
          placeholder="zipcode"
          value={zipcode}
          onChange={updateZipcode} />
        <button type="submit">Update your business</button>
        {/* <button type="button" onClick={handleCancelClick}>Cancel</button> */}
      </form>

    </section>
  )
}

export default EditBusinessForm
