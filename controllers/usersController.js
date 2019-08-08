const db = require("../models");

// Defining methods for the racerController
module.exports = {
  findById: function(req, res) {
    db.userprofiles
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Add delete profile.
  // Add create profile.
  // Add update profile.
};  