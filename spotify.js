require("dotenv").config();
const fs = require("fs");
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const LIRI = require("./liri.js");

let spotifySearch = (search) => {
    spotify.search({ type: 'track', query: search, limit : 1},
    (err, data) => {
        if (err) {
            return console.log('Request Error :' + err);
        }
        let object = data.tracks.items[0];
        let prettyObject = `***************
        Artist: ${object.album.artists[0].name}
        Song: ${object.name}
        Album: ${object.album.name}
        Preview: ${object.album.external_urls.spotify}`;

        console.log(prettyObject);

        fs.appendFile('log.txt', prettyObject, (err) =>{
            if (err) {
                console.log(err)
            }
        })
    })
};
module.exports = spotifySearch;
