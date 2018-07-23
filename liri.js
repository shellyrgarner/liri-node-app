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

var command = process.argv[2];


switch (command) {
    case "my-tweets":
        getTweets();
        break;

    case "spotify-this-song":
        getSpotify();
        break;

    case "movie-this":
        getMovie();
        break;

    case "do-what-it-says":
        getRandom();
        break;
}

//twitter 
function getTweets() {
    var params = { screen_name: 'GtbcShelly', count: 20 };
    // console.log(params);
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(tweets);
            // console.log(response);
        }
    });
}
//spotify
function getSpotify() {
    var song;
    spotify.search({ type: 'track', query: 'search' }, function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            console.log(data);
            // console.log(response);
        }
    });
}



//OMDB
function getMovie() {
    var nodeArgs = process.argv[3];
    // var movieName = "";
    var search = " ";

    for (var i = 3; i < nodeArgs.length; i++) {
           search += nodeArgs[i] + " ";
            console.log("moviename: " + search);
            console.log(i);
        }
    }
    
     search = search.split(' ').join('+');

    var queryURL = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    // var queryURL = "http://www.omdbapi.com/?t=forrest+gump&y=&plot=short&apikey=trilogy";
    console.log("queryURL: " + queryURL);

    request(queryURL, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            console.log(error);
        }
        else {
            var data = JSON.parse(body);
            if (!data.Title) {
                console.log("No Movie! Try Again...");
            }
            else {
                // console.log(JSON.parse(body));
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Release Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
                // console.log(search);
                // console.log(response);
            }
        }
    });


//random.txt file call
function getRandom() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        else {
            console.log(data);
        }
    });
}

