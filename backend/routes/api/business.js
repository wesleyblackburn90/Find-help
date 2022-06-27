const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Business } = require('../../db/models');
const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

router.get("/", asyncHandler(async (req, res) => {
  const businesses = await Business.findAll()
  res.json({ businesses })
}))

module.exports = router
