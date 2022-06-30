const express = require('express')
const asyncHandler = require('express-async-handler');

// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Business, Review } = require('../../db/models');
const router = express.Router();

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

router.get("/", asyncHandler(async (req, res) => {
  const businesses = await Business.findAll()
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

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
  const businessId = parseInt(req.params.id, 10)
  const reviews = Review.findAll({
    where: {
      businessId: businessId
    }
  })
  const business = await Business.findByPk(businessId, { include: Review })

  res.json(business, reviews)
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

  // const businessId = parseInt(req.params.id, 10)
  // const { userId, businessId, rating, review } = req.body
  // const reviews = await Business.create({
  //   userId,
  //   businessId,
  //   rating,
  //   review
  // })
  res.json(business)
}))

router.delete("/:id(\\d+)", asyncHandler(async (req, res) => {
  const business = await Business.findByPk(req.params.id)
  if (business) {
    await business.destroy()
    res.status(200).json(business)
  }
}))

module.exports = router
