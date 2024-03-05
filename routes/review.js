const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")


//Create review
router.post(
  "/",
  validateReview, isLoggedIn,
  wrapAsync(reviewController.createReview)
);

//delete review
router.delete(
  "/:reviewId",isLoggedIn, isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
