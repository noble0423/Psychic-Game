//ITEMS TO FINISH
// =========================================================================================

// find a way to stop the game after 10 incorrect answers (FUNCTION) and rewrite the screen. 10 incorrect answers equals 1 loss

//restart game after a win

// don't allow user to pick same letter they have already picked

//VARIABLES 
// =========================================================================================

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var wrongGuessSayings = ["That's not the letter I am thinking of, hehehe.", "BUZZ!--nope!", "Nice try, but not correct.", "You're no Psychic", "You'll never guess the letter that I am thinking", "I can see we're gonna be here for a while", "This really isn't that hard", "Wrong! BWAHAHAHAHAHA!"];
var computerPick = options[Math.floor(Math.random()*options.length)];
    console.log("Computer picks letter " + computerPick);  

// FUNCTIONS
// ======================================================================================

//function updateScore() {
//    if (guessesLeft === 0) {
//        document.getElementById("game").innerHTML = "a"; 
//    }
//}

//function reWriteScreen() {
//    var html = "<h1>Welcome to the Psychic Game!!!!</h1>" + "<h3>I am thinking of a //letter...</h3>" + "<h3>type any letter to see if you are psychic.</h3>" + "<h5>Wins: " + //wins + "</h5>" + "<h5>Losses: " + losses + "</h5>" + "<h5>Guesses left: " + guessesLeft + //"</h5>" + "<h5>Letters you have guessed so far (#'s and characters don't count): </h5>" + //"<h4> " + guessedLetters + "  </h4>"; 
//} 

// MAIN PROCESS
// ======================================================================================

//updateScore();

// When the user presses a key, it will run the following function...
document.onkeyup = function(events) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        guessedLetters.push(userGuess);
        console.log("User has guessed " + guessedLetters);

    // Ensures that the user only picks a letter 
    if (options.indexOf(userGuess) === -1) {
        alert("I am thinking of a letter! Numbers and other characters don't count! A true Psychic would know that.");
        return;
        
    }

    // Runs if user guess (keystroke) matches the computer's letter.
    if (userGuess === computerPick) {
        alert("Oh my god--I guess you are psychic!");
        console.log("WIN");
        wins++;
        //updateScore();
        //return;
        //restart();
    }
    
    // Runs if user guess (keystroke) does NOT match the computer's letter.
    else {
        var youAreWrong = wrongGuessSayings[Math.floor(Math.random()*wrongGuessSayings.length)];
            alert(youAreWrong);
            console.log(guessesLeft--);
    }

    // END GAME, looses increase by 1
    if (guessesLeft === 0) {
        losses++;
        console.log("You Lose");
        //updateScore();
        //restart();
        //var computerPick = options[Math.floor(Math.random()*options.length)];
        //console.log("User's letter is " + computerPick);

    }

    var html = "<h1>Welcome to the Psychic Game!!!!</h1>" + "<h3>I am thinking of a letter...</h3>" + "<h3>type any letter to see if you are psychic.</h3>" + "<h5>Wins: " + wins + "</h5>" + "<h5>Losses: " + losses + "</h5>" + "<h5>Guesses left: " + guessesLeft + "</h5>" + "<h5>Letters you have guessed so far (#'s and characters don't count): </h5>" + "<h4> " + guessedLetters + "  </h4>"; 

        document.querySelector("#game").innerHTML = html;
   
}
