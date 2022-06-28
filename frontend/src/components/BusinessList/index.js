import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from "../../store/business";
import './BusinessList.css';

function BusinessList() {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => Object.values(state.business))

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  return (
    <>
      <h1>Business List Hopefully</h1>
      {businessList?.map(({ id, businessName, }) => (
        <p key={id}>{businessName}</p>
      ))}
    </>
  )
}

export default BusinessList;
