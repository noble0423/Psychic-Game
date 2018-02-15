// find a way to stop the game after 10 incorrect answers (FUNCTION). 10 incorrect answers equals 1 loss
    // restart game after a win

// display guesses made until win/loss in HTML

// don't allow user to pick same letter they have already picked

// array of "wrong answer" sayings (strings) that the computer can pick at random

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var wrongGuessSayings = ["That's not the letter I am thinking of, hehehe.", "BUZZ!--nope!", "Nice try, but not correct.", "You're no Psychic", "You'll never guess the letter that I am thinking", "I can see we're gonna be here for a while", "This really isn't that hard", "Wrong! BWAHAHAHAHAHA!"];


var computerGuess = options[Math.floor(Math.random()*options.length)];
    console.log("User's letter is " + computerGuess);

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessedLetters.push(userGuess);
        console.log(guessedLetters);
     
    if (options.indexOf(userGuess) === -1) {
        //console.log("non letter was picked");
        alert("I am thinking of a letter! Numbers and other characters don't count!");
        
    }

    else {
        //console.log("a letter was picked");

        if (userGuess === computerGuess) {
            alert("Oh my god--I guess you are psychic!");
            wins++;
        }

        else {
            var youAreWrong = wrongGuessSayings[Math.floor(Math.random()*wrongGuessSayings.length)];
                console.log(youAreWrong);
                console.log(guessesLeft--);
        }
    }

    if (guessesLeft === 0) {
        losses++;
        console.log("STOP GAME");
    }

    var html = "<h1>Welcome to the Psychic Game!!!!</h1>" + "<p>I am thinking of a letter...</p>" + "<p>type any letter to see if you are psychic.</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft + "</p>" + "<p>Letters you have guessed so far: </p>" + guessedLetters; 

        document.querySelector("#game").innerHTML = html;
        

    
}
