const router = require("express").Router();
const mapsController = require("../../controllers/mapsController");

// Matches with "/api/racer"
router.route("/")
  .get(mapsController.findAll)

// Matches with "/api/racer/:id"
router
  .route("/:id")
  .get(mapsController.findById)

module.exports = router;