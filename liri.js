require("dotenv").config();


const axios = require("axios");

const keys = require("./keys.js");

const Spotify = require("node-spotify-api");

const fs = require("fs");



const moment = require("moment");





let userInput1 = process.argv[2];

let userInput2 = process.argv.slice(3, process.argv.length).join(" ");



function concertThis(userInput2) {
   

    if (userInput2) {



        artistInput = userInput2.replace(/\s/g, "+");


        axios.get("https://rest.bandsintown.com/artists/" + artistInput + "/events?app_id=codingbootcamp")
            .then(function (response) {
                  
                let datetime = response.data[0].datetime;

                let dateFormat = "YYYY-MM-DD";

                let convertedDate = moment(datetime, dateFormat);

                let venue = response.data[0].venue;

                console.log("Name of the venue: " + venue.name, "\nVenue location: " + venue.city + ", " + venue.region + " " + venue.country,
                    "\nDate of the event: " + convertedDate.format("MM/DD/YYYY"));

            })
            .catch(function (error) {

                console.log(error);
            });

    }


};

function spotifyThis(userInput2) {

    let spotify = new Spotify(keys.spotify);

    if (userInput2 === "") {

        spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }

            let theSign = data.tracks.items[9];



        console.log("Artist(s): " + JSON.stringify(theSign.artists[0].name), "\nSong's name: " + theSign.name, "\nPreview link of song: " + theSign.preview_url, "\nAlbum song is from: " + theSign.album.name); 
          });

    }
    else if (userInput2 !== "") {

        songNameInput = userInput2.replace(/\s/g, "+");

        spotify.search({ type: 'track', query: songNameInput }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }

            let song = data.tracks.items[9];



        console.log("Artist(s): " + JSON.stringify(song.artists[0].name), "\nSong's name: " + song.name, "\nPreview link of song: " + song.preview_url, "\nAlbum song is from: " + song.album.name); 
          });



    }


};



function movieThis(userInput2) {

    if (userInput2 === "") {

        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=Mr.+Nobody&plot=short")
            .then(function (response) {


                console.log("Title: " + response.data.Title + ";", "\nYear: " + response.data.Year + ";", "\nimdbRating: " + response.data.imdbRating + ";",
                    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + ";", "\nCountry: " + response.data.Country + ";", "\nLanguage: " + response.data.Language + ";",
                    "\nPlot: " + response.data.Plot + ";", "\nActors: " + response.data.Actors + ";");

            })
            .catch(function (error) {

                console.log(error);
            });
    }
    else {

        movieNameInput = userInput2.replace(/\s/g, "+");

        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movieNameInput + "&plot=short")
            .then(function (response) {


                console.log("Title: " + response.data.Title, "\nYear: " + response.data.Year, "\nimdbRating: " + response.data.imdbRating,
                    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value, "\nCountry: " + response.data.Country, "\nLanguage: " + response.data.Language,
                    "\nPlot: " + response.data.Plot, "\nActors: " + response.data.Actors);

            })
            .catch(function (error) {

                console.log(error);
            });

    }


};





if (userInput1 === "concert-this") {

    concertThis(userInput2);

}

else if (userInput1 === "spotify-this-song") {

    spotifyThis(userInput2);

}

else if (userInput1 === "movie-this") {

    movieThis(userInput2);

}

else if (userInput1 === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function (err, data) {

        if (err) throw err;
    

        let dataArray = data.split(",");

        userInput1 = dataArray[0];

        userInput2 = dataArray[1];


        if (userInput1 === "spotify-this-song") {


            spotifyThis(userInput2);
            
        }

        else if (userInput1 === "movie-this") {

            movieThis(userInput2);

        }

        else if (userInput1 === "concert-this") {

        

            let concertArtist = userInput2.replace(/\s/g, "+");

            concertThis(concertArtist);

    

        }




    });





}