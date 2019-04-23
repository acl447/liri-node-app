LIRI Bot

LIRI is a Language Interpretation and Recognition Interface, a command line node app that helps users find information on concerts, movies, and Spotify songs.

To use the app, first clone the project to your computer.

Then, in the project folder, create a file named .env and add the following to it, replacing the values with your API keys(no quotes) once you have them:

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret


Then, in your terminal/bash window:

For information on a concert's date, venue name and venue location, type "node liri.js concert-this <artist/band name here>" and run the app:

For information on a Spotify song's artist(s), name, preview link and album name, type "node liri.js spotify-this-song <song name here>" and run the app:

For information on a movie's title, year, IMDb rating, Rotten Tomatoes rating, country, language, plot synopsis and actors, type "node liri.js movie-this <movie name here>" and run the app:

Type "concert-this,<artist/band name here>", "spotify-this-song,<song name here>", or "movie-this,<movie name here>", in the "random.txt" file. Make sure there are no extra characters or white space:


Then type "node liri.js do-what-it-says" in the terminal/bash window and run the app:




