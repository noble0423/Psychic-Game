// VARIABLES    
// ======================================================================================

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongAnswerSayings = [
    "That's not the letter I am thinking of, hehehe.", 
    "BUZZ!--nope!", 
    "Nice try, but not correct.", 
    "You're no Psychic", 
    "You'll never guess the letter that I am thinking", 
    "I can see we're gonna be here for a while", 
    "This really isn't that hard", 
    "Wrong! BWAHAHAHAHAHA!"
];
var guessedLetters  = [];
var letterToGuess   = null;
var guessesLeft     = 10;
var wins            = 0;
var losses          = 0;



// FUNCTIONS
// ======================================================================================

// Function to update guesses left 
var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

// Function to update letter to guess (random pick)
var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

// Function to update letters guessed.
var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// Function for resetting the game
var reset = function() {
    guessesLeft = 10;

    guessedLetters = [];

    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessesSoFar();    
};


// MAIN PROCESS
// ======================================================================================

updateLetterToGuess();

document.onkeyup = function (event) {
    console.log(event.which);

    // if key pressed is not a letter, must chose again
    if (event.which < 65 || event.which > 90) {
        alert("You must chose a letter.");
    }
    else {
        var letter = String.fromCharCode(event.which).toLowerCase();

        // if letter has already been guessed, alert user to pick another letter.
        if (guessedLetters.includes(letter)) {
            alert("You have already guessed this letter, please pick another letter.");
        }
        else {
            guessedLetters.push(letter);
    
            guessesLeft--;
    
            updateGuessesLeft();
            updateGuessesSoFar();
    
            // if user has no more guesses, end game
            if (guessesLeft === 0) {
                alert("wrong");
    
                losses++;
                document.querySelector("#losses").innerHTML = losses;
    
                reset();
            }
            else if (letter === letterToGuess) {
                wins++;
                document.querySelector("#wins").innerHTML = wins;
    
                alert("Wow, you're psychic!!");
    
                reset();
            }
            else {
                alert("wrong");
            }
        }
    }
}
