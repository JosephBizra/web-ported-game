const router = require("express").Router();
const racerRoutes = require("./racers");
const userRoutes = require("./users");
const mapRoutes = require("./maps");


// Matches with "/api/users"
router.route("/users", userRoutes);

module.exports = router;