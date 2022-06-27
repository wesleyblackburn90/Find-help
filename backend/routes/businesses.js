const express = require("express")
const { db } = require("../db/models")
const router = express.router()
const { asyncHandler, csrfProtection } = require("./utils")

// router.get("/businesses", asyncHandler(async (req, res) => {
//   const businesses = await db.Business.findAll();
//   res.render()
// }))
