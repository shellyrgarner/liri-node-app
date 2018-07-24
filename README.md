# liri-node-app
Created app that takes command lines in as parameters and gives data back out to you.  List of commands..
1. node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.
2. node liri.js spotify-this-song '<song name here>'
This will show the artist, song name, link to preview song, and album name.  If no song is provided then the default song's info will be returned
3. node liri.js movie-this '<movie name here>'
This will output movie title, year, IMDB rating, Rotten Tomatoes rating, country movie was produced, language, plot and actors.  If no movie is provided then the default movie's info will be returned
4. node liri.js do-what-it-says
This command will take the text inside of random.txt and then use it to call one of LIRI's commands. 