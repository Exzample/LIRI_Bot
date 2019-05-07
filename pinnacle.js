require("dotenv").config({ path: "gitignore/.env" });
const request = require("request");
const fs = require("fs");
const moment = require("moment");
const LIRI = require("./liri.js");
const chalk = require("chalk");
const pinnacleAPI = require("pinnacle-sports-api");
var pinnacle = new Pinnacle(keys.pinnacle);


pinnacle.getSports((err, response, body) => {
  if (err) throw new Error(err);
  console.log(body);
});

let options = { sportId: 3 };
pinnacle.getLeagues(options, (err, response, body) => {
  if (err) throw new Error(err);
  console.log(body);
});


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

// module.exports = movieThis;
