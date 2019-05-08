require("dotenv").config({ path: "gitignore/.env" });
const request = require("request");
const fs = require("fs");
const moment = require("moment");
const LIRI = require("./liri.js");
const chalk = require("chalk");
var JsonOddsAPI = require("json-odds-api");
var jsonOdds = new JsonOddsAPI(keys.jsonOdds);
// Get Sources //
// As of now the API supports five sources: Pinnacle(1), Bookmaker(2), BetOnline(3), Bovada(4), and GTBets(5)
jsonOdds.getSources(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
// Get Odd Type //
// As of now the API will return ["None", "Game", "FirstHalf", "SecondHalf", "FirstQuarter", "SecondQuarter", "ThirdQuarter", "FourthQuarter", "FirstPeriod", "SecondPeriod", "ThirdPeriod", "FirstFiveInnings", "FirstInning"]
jsonOdds.getOddType(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
// Get Regions //
jsonOdds.getRegions(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

//Get Sports //
// AS of now the API will return {"0":"mlb","1":"nba","2":"ncaab","3":"ncaaf","4":"nfl","5":"nhl","7":"soccer","11":"mma","9":"tennis","12":"None"}
jsonOdds.getSports(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Leagues //
jsonOdds.getLeagues(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Leagues by Region //
var options = { regionName: "SWE" };
jsonOdds.getLeagues(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Odds //

jsonOdds.getOdds(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get odds by Sport //
var options = { sport: "MLB" };
jsonOdds.getOdds(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Odds by Odd Type //
var options = { oddType: "FirstHalf" };
jsonOdds.getOdds(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Odds by Source #1 //
var options = { source: 1 }; // ID of Pinnacle Sports
jsonOdds.getOdds(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Odds by Source  #2 //
var options = { source: 1 }; // ID of Pinnacle Sports
jsonOdds.getOdds(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Results by Sport //
jsonOdds.getResults(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Results with a Specific OddType //
var options = { sport: "mlb", final: true };
jsonOdds.getResults(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// Get Results for a Specific Game //
var options = { eventId: "06c98b03-becb-4d04-a095-8ba717d32b1f" };
jsonOdds.getResults(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});

// pinnacle.getSports((err, response, body) => {
//   if (err) throw new Error(err);
//   console.log(body);
// });

// let options = { sportId: 3 };
// pinnacle.getLeagues(options, (err, response, body) => {
//   if (err) throw new Error(err);
//   console.log(body);
// });

// let movieThis = searchTerm => {
//   if (!searchTerm) {
//     searchTerm = "Braveheart";
//   }
//   request(``, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       let object = JSON.parse(body);
//       let prettyObject = `*********************************************
//             Title : ${object.Title}
//             Release Date : ${moment(object.Released).format("YYYY")}
//             IMBD Rating : ${object.Ratings[0].value}
//             Rotten Tomatoes : ${object.Ratings[1].value}
//             Country of Origin : ${object.Country}
//             Language : ${object.Language}
//             Plot : ${object.Plot}
//             Actors : ${object.Actors}
//             *********************************************`;

//       console.log(chalk.green(prettyObject));
//       fs.appendFile("log.txt", prettyObject, err => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     }
//   });
// };

module.exports = getSports;
