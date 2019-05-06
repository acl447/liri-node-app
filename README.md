# LIRI Bot

LIRI is a Language Interpretation and Recognition Interface, a command line node app that helps users find information on concerts, movies, and Spotify songs.

To use the app, first clone the project to your computer.

Then, in the project folder, create a file named .env and add the following to it, replacing the values with your API keys(no quotes) once you have them:

# Spotify API keys

SPOTIFY_ID=your-spotify-id

SPOTIFY_SECRET=your-spotify-secret

Then be sure to install the required packages by typing "npm install" in your terminal/bash window.


Then, in your terminal/bash window:

For information on a concert's date, venue name and venue location, type "node liri.js concert-this <artist/band name here>" and run the app: 

<img width="718" alt="concert-screenshot" src="https://user-images.githubusercontent.com/44036798/57203045-1668f980-6f61-11e9-88b3-fe67cfb55505.png">


For information on a Spotify song's artist(s), name, preview link and album name, type "node liri.js spotify-this-song <song name here>" and run the app: 

<img width="747" alt="spotify-screenshot" src="https://user-images.githubusercontent.com/44036798/57203054-2a146000-6f61-11e9-8e16-fff22c5538f4.png">

For information on a movie's title, year, IMDb rating, Rotten Tomatoes rating, country, language, plot synopsis and actors, type "node liri.js movie-this <movie name here>" and run the app: 

<img width="1066" alt="movie-screenshot" src="https://user-images.githubusercontent.com/44036798/57203061-3ac4d600-6f61-11e9-9aeb-b91b744e2ecb.png">


Type "concert-this,<artist/band name here>", "spotify-this-song,<song name here>", or "movie-this,<movie name here>", in the "random.txt" file. Make sure there are no extra characters or white space: 

<img width="903" alt="random-txt-screenshot" src="https://user-images.githubusercontent.com/44036798/57203066-47492e80-6f61-11e9-9830-b4a9a09c11f8.png">


Then type "node liri.js do-what-it-says" in the terminal/bash window and run the app: 

<img width="549" alt="do-what-it-says-screenshot" src="https://user-images.githubusercontent.com/44036798/57203069-5e881c00-6f61-11e9-97c6-03fac56bfbfb.png">




