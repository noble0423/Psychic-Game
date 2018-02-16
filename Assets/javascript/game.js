// find a way to stop the game after 10 incorrect answers (FUNCTION). 10 incorrect answers equals 1 loss
    // restart game after a win

// don't allow user to pick same letter they have already picked

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
        alert("I am thinking of a letter! Numbers and other characters don't count! A true Psychic would know that.");
        
    }

    //else {
        //console.log("a letter was picked");

        //for (i = 0; i < guessedLetters.length; i++) {
        //    if guessedLetters.indexOf(userGuess)
        //}

    if (userGuess === computerGuess) {
        alert("Oh my god--I guess you are psychic!");
        wins++;
    }
        
        //else if (guessedLetters.indexOf() != userGuess) {
        //    console.log("move to next step-comparing values");
        //}

    else {

        var youAreWrong = wrongGuessSayings[Math.floor(Math.random()*wrongGuessSayings.length)];
        alert(youAreWrong);
        console.log(guessesLeft--);
        }
    //}

    // END GAME   

    function reWriteStats() {
        console.log(guessesLeft);
        console.log(guessedLetters);
     }
   
    if (guessesLeft === 0) {
        losses++;
        console.log("STOP GAME");
        reWriteStats();
        var computerGuess = options[Math.floor(Math.random()*options.length)];
            console.log("User's letter is " + computerGuess);

    }



    var html = "<h1>Welcome to the Psychic Game!!!!</h1>" + "<h3>I am thinking of a letter...</h3>" + "<h3>type any letter to see if you are psychic.</h3>" + "<h5>Wins: " + wins + "</h5>" + "<h5>Losses: " + losses + "</h5>" + "<h5>Guesses left: " + guessesLeft + "</h5>" + "<h5>Letters you have guessed so far: </h5>" + "<h4> " + guessedLetters + "  </h4>"; 

        document.querySelector("#game").innerHTML = html;
        

    
}
