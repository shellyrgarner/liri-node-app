require("dotenv").config();
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var twitter = require('twitter');
var request = require('request'); //omdb
var fs = require("fs");

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);
// console.log(keys.spotify);
// console.log(keys.twitter);

//twitter 
// var myTweets = process.argv[2];
// var params = {screen_name: 'GtbcShelly', count:20};
// // console.log(params);
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if(error) { 
//     console.log(error);
//     }
//     else {
//         console.log(tweets);
//         // console.log(response);
//     }
    
// });

// //spotify
// var song;
// spotify.search({ type: 'track', query: 'song'}, function(err, data) {
//     if (err) {
//         console.log(error);
//     }
//     else {
//         console.log(data);
//         // console.log(response);
//     }
// });

//OMDB
// var movieName;
// // var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// var queryURL = "http://www.omdbapi.com/?t=forrest+gump&y=&plot=short&apikey=trilogy";

// request(queryURL, function(error, response, body) {
//     if (error || response.statusCode !== 200) {
//         console.log(error);
//     }
//     else {
//         console.log(JSON.parse(body));
//         // console.log(response);
//     }
// });


//random.txt file call
fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }
    else{
        console.log(data);
    }
})