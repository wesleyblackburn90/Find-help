import React from "react";
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { createBusinesses } from "../../store/business";


const BusinessForm = ({ hideForm }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [ownerId, setOwnerId] = useState(0)
  const [businessName, setBusinessName] = useState("")
  const [description, setDescription] = useState("")
  const [picture, setPicture] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setstate] = useState("")
  const [zipcode, setZipcode] = useState(0)

  const updateOwnerId = (e) => setOwnerId(e.target.value)
  const updateBusinessName = (e) => setBusinessName(e.target.value)
  const updateDescription = (e) => setDescription(e.target.value)
  const updatePicture = (e) => setPicture(e.target.value)
  const updateAddress = (e) => setAddress(e.target.value)
  const updateCity = (e) => setCity(e.target.value)
  const updateState = (e) => setstate(e.target.value)
  const updateZipcode = (e) => setZipcode(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      ownerId,
      businessName,
      description,
      picture,
      address,
      city,
      state,
      zipcode
    }

    // let createdBusiness
    // try {
    //   createdBusiness = await dispatch(createBusinesses(payload))
    // } catch (err) {
    //   console.log(err)
    // }

    const createdBusiness = await dispatch(createBusinesses(payload))

    if (createdBusiness) {
      history.push("/business")
      hideForm();
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault()
    hideForm()
  }

  return (
    <section className="new-business-form">
      <form className="business-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ownerId"
          required
          value={ownerId}
          onChange={updateOwnerId} />
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
        <button type="submit">Add a business</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>

    </section>
  )
}

export default BusinessForm
