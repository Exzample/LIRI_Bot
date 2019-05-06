const request = require("request");
const fs = require("fs");
const moment = require("moment");
const LIRI = require("./liri.js");

let movieThis = (searchTerm) => {
    if(!searchTerm) {
        searchTerm = "Braveheart";
    }
    request(`http://omdbapi.com/?t=${searchTerm}&apikey=trilogy`,
    (error, response, body) => {
        if(!error && response.statusCode === 200) {
            let object = JSON.parse(body);
            let prettyObject = `**************
            Title : ${object.Title}
            Release Date : ${moment(object.Released).format("YYYY")}
            IMBD Rating : ${object.Ratings[0].Value}
            Rotten Tomatoes : ${object.Ratings[1].Value}
            Country of Origin : ${object.Country}
            Language : ${object.Language}
            Plot : ${object.Plot}
            Actors : ${object.Actors}`;

            console.log(prettyObject);
            fs.appendFile('log.txt', prettyObject, (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
};

module.exports = movieThis;