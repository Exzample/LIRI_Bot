const concert = require('./concert.js');
const spotify = require('./spotify.js');
const movie = require('./movie.js');
const doIT = require('./doIT.js');

let command = process.argv[2];
let search = process.argv.splice(3).join(" ");

switch (command) {
    case 'concert-this':
        concert(search);
        break;
    case 'spotify-this-song':
        spotify(seach);
        break;
    case 'movie-this':
        movie(seach);
        break;
    case 'do-what-it-says':
        doIT();
        break;
    default:
        console.log("please prefix your search with 'concert-this', 'spotify-this-song', 'movie-this' or 'do-what-it-says' ");
        break;
}
