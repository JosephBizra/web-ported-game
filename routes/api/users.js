const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/racer"
router.route("/")
  .get(usersController.findAll)

// Matches with "/api/racer/:id"
router
  .route("/:id")
  .get(usersController.findById)

module.exports = router;