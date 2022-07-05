const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Business, Review } = require('../../db/models');
const router = express.Router();

// const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateBusiness = [
  check('businessName')
    .exists({ checkFalsy: true })
    .withMessage('Please give your business a name'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please leave a short description'),
  check('address')
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid address"),
  check('city')
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid city"),
  check('state')
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid state"),
  check('zipcode')
    .exists({ checkFalsy: true })
    .isLength({ min: 5, max: 5 })
    .withMessage("Please enter your 5 digit zip code"),
  handleValidationErrors
]

router.get("/", asyncHandler(async (req, res) => {
  const businesses = await Business.findAll({ include: Review })
  res.json(businesses)
}))

router.post("/", validateBusiness, asyncHandler(async (req, res) => {
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

  if (!business) {
    const err = new Error('Login failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['The provided credentials were invalid.'];
    return next(err);
  }

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

router.delete("/review/:id(\\d+)", asyncHandler(async (req, res) => {
  const review = await Review.findByPk(req.params.id)
  if (review) {
    await review.destroy()
    res.status(200).json(review)
  }
}))

module.exports = router
