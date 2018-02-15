// find a way to stop the game after 10 incorrect answers (for loop maybe). 10 incorrect answers equals 1 loss
    // restart game after a win

// display guesses made until win/loss...return(userGuess) maybe?

// make computer guess stick (right now it changes to a random letter everytime i press a new key)

+




var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wins = 0;
var losses = 0;
var guessesLeft = 9;

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("User guessed " + userGuess);
        
    
    var computerGuess = options[Math.floor(Math.random()*options.length)];
        console.log("Computer picked " + computerGuess);
    
    /*
    if (userGuess === options[i]) {
        console.log("great, letter picked");
    }

    else {
        console.log("key other than a letter was picked");
    }*/

     
    if (options.indexOf(userGuess) === -1) {
        console.log("non letter was picked");
        alert("I am thinking of a letter! Numbers and other characters don't count!");
        
    }

    else {
        console.log("a letter was picked");

        if (userGuess === computerGuess) {
            console.log("Oh my god--I guess you are psychic!");
            wins++;
        }

        else {
            console.log("That's not the letter I am thinking of, hehehe");
            console.log(guessesLeft--);
        }
    }

    // could a for loop end the game somehow?? for (i = 0; i < 10; i++) {}...maybe this could encompass the whole game and it stops when it has run 10 x's, unless user guesses correctly.
    if (guessesLeft === -1) {
        console.log("STOP GAME");
    }

    var html = "<h1>Welcome to the Psychic Game!!!!</h1>" + "<p>I am thinking of a letter...</p>" + "<p>type any letter to see if you are psychic.</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft + "</p>" + "<p>Letters you have guessed so far: " + "</p>"; 

            document.querySelector("#game").innerHTML = html;
        

    
}
