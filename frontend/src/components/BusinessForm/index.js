import React from "react";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
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
  const [zipcode, setZipcode] = useState(00000)

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

    let createdBusiness
    try{
      createdBusiness = await dispatch(createBusinesses(payload))
    } catch (err) {
      console.log(err)
    }

    if(createdBusiness){
      history.push(`/business/${createdBusiness.id}`)
      hideForm();
    }

  }
}
