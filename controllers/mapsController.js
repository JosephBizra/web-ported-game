const db = require("../models");

// Defining methods for the racerController
module.exports = {
  findAll: function(req, res) {
    db.maps
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};  