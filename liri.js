const concert = require('./concert.js');
const spotify = require('./spotify.js');
const movie = require('./movie.js');
const ripIt = require('./ripIt.js');
const chalk = require('chalk');

let command = process.argv[2];
let search = process.argv.splice(3).join(" ");

switch (command) {
    case 'concert-this':
        concert(search);
        break;
    case 'spotify-this-song':
        spotify(search);
        break;
    case 'movie-this':
        movie(search);
        break;
    case 'do-what-it-says':
        ripIt();
        break;
    default:
        console.log(chalk.yellow("Please prefix your search with + 'concert-this ' , 'spotify-this-song' , 'movie-this' or 'do-what-it-says' "));
        break;
}
