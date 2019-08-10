/* eslint-disable no-undef */
const axios = require('axios');
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/3000"
);

categoriesArray = [9, 12, 18, 21, 26, 27, 11, 14, 22, 19];
UnitySeed = [];
runSeeds = (i) => {
    console.log("we running stuff");

    // We then run the request with axios module on a URL with a JSON
    axios.get("https://opentdb.com/api.php?amount=10&category=" + categoriesArray[i] + "&type=multiple").then(
        function (response) {
            // Then we print out the Unity api data
            console.log("we got stuff")
            // console.log("Response from Unity API: " + JSON.stringify(response.data.results));
            let results = response.data.results;
            console.log(results[0].category);

            i++;
            if (i === categoriesArray.length) {
                console.log("we're done")
                db.Game
                    .collection.insertMany(UnitySeed)
                    .then(data => {
                        console.log(data.result.n + " records inserted!");
                        process.exit(0);
                    })
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    });
            }
            else {
                console.log("running this again")
                runSeeds(i);
            }
        }
        
    );

}

runSeeds(0);