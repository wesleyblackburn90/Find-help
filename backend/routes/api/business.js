const express = require('express')
const asyncHandler = require('express-async-handler');

// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Business, Review } = require('../../db/models');
const router = express.Router();

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

router.get("/", asyncHandler(async (req, res) => {
  const businesses = await Business.findAll({ include: Review })
  res.json(businesses)
}))

router.post("/", asyncHandler(async (req, res) => {
  const { ownerId, businessName, description, picture, address, city, state, zipCode } = req.body;
  const business = await Business.create({
    ownerId,
    businessName,
    description,
    picture,
    address,
    city,
    state,
    zipCode
  })
  res.json(business)
}))

router.delete("/:id(\\d+)", asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.id)
  if (business) {
    await business.destroy()
    console.log(business)
    res.status(200).json(business)
  }
}))

router.post("/:id(\\d+)", asyncHandler(async (req, res) => {
  const { userId, businessId, rating, review } = req.body
  const newReview = await Review.create({
    userId,
    businessId,
    rating,
    review
  })
  res.json(newReview)
}))


router.put("/:id(\\d+)", asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.id)
  business.businessName = req.body.businessName
  business.description = req.body.description
  business.picture = req.body.picture
  business.address = req.body.address
  business.city = req.body.city
  business.state = req.body.state
  business.zipCode = req.body.zipCode
  await business.save()

  res.json(business)
}))


module.exports = router
