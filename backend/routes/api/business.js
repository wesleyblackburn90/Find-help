const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Business, Review } = require('../../db/models');
const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

router.get("/", asyncHandler(async (req, res) => {
  const businesses = await Business.findAll()
  res.json(businesses)
}))

router.post("/", asyncHandler(async (req, res) => {
  const { businessName, description, picture, address, city, state, zipCode } = req.body;
  const business = await Business.create({
    ownerId: req.session.auth.userId,
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
  const business = await Business.findByPk(businessId, { include: Review })

  res.json(business)
}))

router.post("/:id(\\d+)", asyncHandler(async (req, res) => {

}))

module.exports = router
