const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/racer"
router.route("/")
  .get(profilesController.findAll)

// Matches with "/api/racer/:id"
router
  .route("/:id")
  .get(profilesController.findById)

module.exports = router;