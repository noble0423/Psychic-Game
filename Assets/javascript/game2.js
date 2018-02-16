

// VARIABLES
// ==========================================================================

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wins = 0;
var losses = 0;
var guessesLeft = 10;  
var guessedLetters = [];
var wrongGuessSayings = ["That's not the letter I am thinking of, hehehe.", "BUZZ!--nope!", "Nice try, but not correct.", "You're no Psychic", "You'll never guess the letter that I am thinking", "I can see we're gonna be here for a while", "This really isn't that hard", "Wrong! BWAHAHAHAHAHA!"];




// FUNCTIONS
// ==============================================================================
// Function to render Random letter chosen by computer
function computerPick() {
    var computerGuess = options[Math.floor(Math.random()*options.length)];
        console.log("Computer's letter is " + computerGuess);
}
// Function to capture letter chosen by user
function userPick() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessedLetters.push(userGuess);
        console.log("User picked letter " + guessedLetters);
}        
//}
// Function that updates the score...


// MAIN PROCESS
// ==============================================================================
// Calling functions to start the game.
computerPick();

document.onkeyup = function(event) {
    userPick();

    // If all guesses have been made, stop the function.
    if (guessesLeft === 0) {
        return;
    }
    // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.
    
    
    
}
    
    //if (options.indexOf(psychicGame.userGuess) === -1) {
    //console.log("non letter was picked");
    //   alert("I am thinking of a letter! Numbers and other characters don't count! //A true Psychic would know that.");
        
    //}

    if (computerPick() === userPick()) { 
        alert("Oh my god--I guess you are psychic!");
        wins++;
    }

    //else {
    //    var youAreWrong = wrongGuessSayings[Math.floor(Math.random()//*wrongGuessSayings.length)];
    //        alert(youAreWrong);
    //        console.log(guessesLeft--);
    //}


//}
