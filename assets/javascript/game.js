
//Values are set
lettersIndex = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

wins = 0;
losses = 0;
guessesSoFar = []; // this is an array value
guessesLeft = 10;

//function is created to run a loop
var runLoop = function () { // ELIMINATING THE FUNCTION HAD NO EFFECT ON PROGRAM WORKABILITY

    // computer chooses a letter and it is assigned a variable name
    var computerCurrentChoice = lettersIndex[Math.floor(Math.random() * lettersIndex.length)];
    guessesLeft = 10;

    // when User presses key it launches a function to execute process
    document.onkeyup = function (event) {

        //when user preses letter key it is stored as var userGuess
        var userGuess = event.key;

        // If the user and the computer choose the same letter:         
        if (userGuess === computerCurrentChoice) {
            wins++;  // wins adds 1,
            alert("You won!!!");//alert is launched notifying user of win
            computerCurrentChoice = lettersIndex[Math.floor(Math.random() * lettersIndex.length)];
            guessesLeft = 10; // resets to 10
            guessesSoFar = []; // guessesSoFar are reset to 'blank'
        }

        // if userGuess and computerChoice are different: 
        else {
            guessesLeft--; // guessesLeft decreases 1,
            guessesSoFar.push(userGuess);  //guessesSoFar is 'pushed' and logs the letter choice into array
        }

        // if guesses left reached 0:
        if (guessesLeft < 1) {
            alert("You lose!");//alert is launched notifying user of loss
            guessesSoFar = []; // guessesSoFar are reset to 'blank'
            losses++;  // losses adds 1
            computerCurrentChoice = lettersIndex[Math.floor(Math.random() * lettersIndex.length)];
            guessesLeft = 10; // resets to 10
        }

        // Rewrites the html with updated values
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;
    }
};

runLoop(); //  Calls the function









