require("dotenv").config();
const fs = require("fs");
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
// const spotify = new Spotify(keys.spotify);
const spotify = new Spotify({
    id: 'c2154006c1e84b018dd35ff50c9d3b7e',
    secret: '01ab0775d7a14fa686c6e9f882c85cf7'
});
const LIRI = require("./liri.js");
const chalk = require("chalk");

let spotifySearch = (search) => {
    spotify.search({ type: 'track', query: search, limit : 1},
    (err, data) => {
        if (err) {
            return console.log('Request Error :' + err);
        }
        let object = data.tracks.items[0];
        let prettyObject = 
        `*********************************************
        Artist: ${object.album.artists[0].name}
        Song: ${object.name}
        Album: ${object.album.name}
        Preview: ${object.album.external_urls.spotify}
        *********************************************`;

        console.log(chalk.red(prettyObject));

        fs.appendFile('log.txt', prettyObject, (err) =>{
            if (err) {
                console.log(err)
            }
        })
    })
};
module.exports = spotifySearch;
