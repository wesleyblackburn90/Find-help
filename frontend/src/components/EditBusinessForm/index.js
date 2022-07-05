import React, { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { editBusiness, getAllBusinesses } from "../../store/business";
import "./editBusinessForm.css"


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
  const [errors, setErrors] = useState([])

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

  const handleSubmit = async (e) => {
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

    setErrors([])

    try {
      await dispatch(editBusiness(payload, reviews))
      history.push(`/business/${business.id}`)
    } catch {
      return dispatch(editBusiness(payload, reviews)).catch(async (res) => {
        const data = await res.json();
        console.log(data)
        if (data && data.errors) setErrors(data.errors);
      })
    }
  }

  return (
    <section className="edit-business-form">
      <form className="update-business-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx} className="errorList"> • {error}</li>)}
        </ul>
        <h3>Business Name:</h3>
        <input
          className="editFormInput"
          type="text"
          placeholder="BusinessName"
          required
          value={businessName}
          onChange={updateBusinessName} />
        <h3>Description:</h3>
        <input
          className="editFormInput"
          type="text"
          placeholder="description"
          value={description}
          onChange={updateDescription} />
        <h3>Image Url:</h3>
        <input
          className="editFormInput"
          type="text"
          placeholder="imageUrl"
          value={picture}
          onChange={updatePicture} />
        <h3>Address:</h3>
        <input
          className="editFormInput"
          type="text"
          placeholder="address"
          value={address}
          onChange={updateAddress} />
        <h3>City:</h3>
        <input
          className="editFormInput"
          type="text"
          placeholder="city"
          value={city}
          onChange={updateCity} />
        <h3>State:</h3>
        <input
          className="editFormInput"
          type="text"
          placeholder="state"
          value={state}
          onChange={updateState} />
        <h3>Zip code:</h3>
        <input
          className="editFormInput"
          type="number"
          placeholder="zipcode"
          value={zipcode}
          onChange={updateZipcode} />
        <button type="submit" id="updateButton">Update your business</button>
      </form>

    </section>
  )
}

export default EditBusinessForm
