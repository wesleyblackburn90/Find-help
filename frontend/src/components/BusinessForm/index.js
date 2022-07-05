import React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { createBusinesses } from "../../store/business";
import "./BusinessForm.css"


const BusinessForm = ({ hideForm }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useSelector((state) => state.session.user.id)

  const [businessName, setBusinessName] = useState("")
  const [description, setDescription] = useState("")
  const [picture, setPicture] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setstate] = useState("")
  const [zipcode, setZipcode] = useState("ex. 32145")
  const [errors, setErrors] = useState([])

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
      ownerId: userId,
      businessName,
      description,
      picture,
      address,
      city,
      state,
      zipcode
    }

    setErrors([]);


    try {
      await dispatch(createBusinesses(payload))
      history.push("/business")
    } catch {
      return dispatch(createBusinesses(payload)).catch(async (res) => {
        const data = await res.json();
        console.log(data)
        if (data && data.errors) setErrors(data.errors);
      })
    }
  }

  return (
    <section className="new-business-form">
      <form className="business-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx} className="errorList"> • {error}</li>)}
        </ul>
        <input
          className="form-input"
          type="text"
          placeholder="Business Name"
          required
          value={businessName}
          onChange={updateBusinessName} />
        <input
          className="form-input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={updateDescription} />
        <input
          className="form-input"
          type="text"
          placeholder="Image URL"
          value={picture}
          onChange={updatePicture} />
        <input
          className="form-input"
          type="text"
          placeholder="Address"
          value={address}
          onChange={updateAddress} />
        <input
          className="form-input"
          type="text"
          placeholder="City"
          value={city}
          onChange={updateCity} />
        <input
          className="form-input"
          type="text"
          placeholder="State"
          value={state}
          onChange={updateState} />
        <input
          className="form-input"
          type="number"
          placeholder="Zipcode"
          value={zipcode}
          onChange={updateZipcode} />
        <button type="submit" id="businessSubmitButton">Add your business</button>
      </form>

    </section>
  )
}

export default BusinessForm
