/* ----------------------
          VARIABLES       
   ----------------------*/
var computerWord = '';
var wins = 0;
var word = [];
var guessesLeft = 10;
var wordArray = [
    'apple',
    'pear',
    'banana', 
    'grapefruit',
    'peach'];
var lettersGuess = '';
var userGuess = '';



    // computer chooses a letter and it is assigned a variable name
    computerWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(computerWordChoice);
    /* ----------------------
          FUNCTIONS       
   ----------------------*/

   // when User presses key it launches a function to execute process
        userGuessFunction = document.onkeyup {

    
        // document.onkeyup = function (event) {\

    //when user preses letter key it is stored as var userGuess
    function guessSequence() {

            


 
     letterGuess = event.key;
          console.log(letterGuess);
          function letterGuess(){

            $('#guessesSoFar').push(letterGuess);
            console.log(letterGuess);

            // document.getElementById('guesses').innerHTML = userGuess;


          }
        }
        
    function guessSequence();
    
        
        
        //   function isRightLetter (userGuess) {
        //       for (i=0; i<computerWordChoice.length; i++);
        //       //how do i compare the letter guesses to the computer word?
        //       console.log(i);
        //   } if (userGuess == computerWordChoice.charAt(0)) 
        //     $(".letterSlots").text(userGuess);

            
        //     else {
        //       guessesLeft--;
        //       $("#remainingGuesses").text(guessesLeft);
          
        //     }
        //     };

        

          
        

    //       if userGuess === computerWordChoice
    //  $('#guesses').push(userGuess);
          
        
    // };

    // on("click", function () {
    //     lettersGuesses = userTotal = (userTotal + value1);
    //     $('#scoreBox').text(userTotal);//try this on this line
    //     // WINNING
    //     if (userTotal === randomComputerNumber) {
    //         wins++;
    //         //updates the WIN total on the DOM
    //         $('#winsOrLoss').text('You won!');
    //         $('#wins').text('Wins   = ' + wins);
    //         userTotal = 0;
    //         initializeGame();
    //         //LOSING
    //     } else if (userTotal > randomComputerNumber) {
    //         losses++;
    //         //updates the LOSS total on the DOM
    //         $('#winsOrLoss').text('You lost!');
    //         $('#losses').text('Losses = ' + losses);
    //         userTotal = 0;
    //         initializeGame();
    //     }
    // });
    

    
        // Rewrites the html with updated values
        // document.getElementById('wins').innerHTML = "Wins: " + wins;
        // document.getElementById('losses').innerHTML = "Losses: " + losses;
        // document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        // document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;
    

// runLoop(); //  Calls the function

/* Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).



If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: m a d o _  _ a.



Number of Guesses Remaining: (# of guesses remaining for the user).
Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.
*/











