
//  var request = require('request'); //omdb

//  var nodeArgs = process.argv;
//     var movieName = "";

//     for (var i = 2; i<nodeArgs.length; i++) {
//         if (i>2 && i<nodeArgs.length) {
//             node nodeArgs[i].split(' ').join('+');;
//             console.log("moviename: " + movieName);
//             console.log(i);
//         }
//         else {
//             movieName += nodeArgs[i];
//             console.log("moviename: " + movieName);
//             console.log(i);
//         }
//     }
//     // var search = process.argv[3];
//     var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//     // var queryURL = "http://www.omdbapi.com/?t=forrest+gump&y=&plot=short&apikey=trilogy";
//     console.log("queryURL: " + queryURL);

//     request(queryURL, function(error, response, body) {

//         // If the request is successful
//         if (!error && response.statusCode === 200) {
      
//           // Parse the body of the site and recover just the imdbRating
//           // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//         //   console.log("Release Year: " + JSON.parse(body).Year);
//           console.log("Title: " + JSON.parse(body).Title);
//                   console.log("Release Year: " + JSON.parse(body).Year);
//                   console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
//                 //   console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
//                   console.log("Country: " + JSON.parse(body).Country);
//                   console.log("Language: " + JSON.parse(body).Language);
//                   console.log("Plot: " + JSON.parse(body).Plot);
//                   console.log("Actors: " + JSON.parse(body).Actors);
//         }
//       });

//     // request(queryURL, function (error, response, body) {
//     //     if (error || response.statusCode !== 200) {
//     //         console.log(error);
//     //     }
//     //     else {
//     //         // console.log(JSON.parse(body));
//     //         console.log("Title: " + JSON.parse(body).Title);
//     //         console.log("Release Year: " + JSON.parse(body).Year);
//     //         console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
//     //         console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings.Source[2]);
//     //         console.log("Country: " + JSON.parse(body).Country);
//     //         console.log("Language: " + JSON.parse(body).Language);
//     //         console.log("Plot: " + JSON.parse(body).Plot);
//     //         console.log("Actors: " + JSON.parse(body).Actors);
//     //         // console.log(search);
//     //         // console.log(response);
//     //     }
//     // });