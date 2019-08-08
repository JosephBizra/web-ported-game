const router = require("express").Router();
const racerController = require("../../controllers/racerController");

// Matches with "/api/racer"
router.route("/")
  .get(racerController.findAll)

// Matches with "/api/racer/:id"
router.route("/:id")
  .get(racerController.findById)

module.exports = router;