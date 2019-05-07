const request = require('request');
const fs = require('fs');
const LIRI = require('./liri.js');
const moment = require('moment');
const chalk = require('chalk');

const concertThis = (searchTerm)=> {
    request(`https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=codingbootcamp`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let object = JSON.parse(body)[0];
            let prettyObject = `*********************************************
            Band : ${object.lineup}
            Name : ${object.venue.name}
            Location : ${object.venue.city}
            Date : ${moment(object.datetime).format("MM-DD-YYYY")}
            *********************************************`;
            console.log(chalk.blue(prettyObject));
            fs.appendFile('log.txt', prettyObject, (err) => {
                if(err) {
                    console.log(err)
                }
            })
        }
    })
}
module.exports = concertThis;