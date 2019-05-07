const concert = require('./concert.js');
const spotify = require('./spotify.js');
const movie = require('./movie.js');
const ripIt = require('./ripIt.js');
const chalk = require('chalk');

let command = process.argv[2];
let search = process.argv.splice(3).join(" ");

switch (command) {
    case 'concert':
        concert(search);
        break;
    case 'song':
        spotify(search);
        break;
    case 'movie':
        movie(search);
        break;
    case 'random':
        ripIt();
        break;
    default:
        console.log(chalk.yellow("Please prefix your search with: "))+ console.log(chalk.blue('1.' + 'concert')) + console.log(chalk.red('2.' + 'song')) + console.log(chalk.green('3.' + 'movie')) + console.log(chalk.yellow('or...')) + console.log(chalk.bold.magentaBright('4. ' + 'random'));
        break;
}
