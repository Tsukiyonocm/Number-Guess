var magicNumber = 0;
var missedGuesses = 0;
var toggle = false;


var guessingGame = {

    //compares magicNumber to Guessed Number
    playerGuess: function(num){
        if (num === magicNumber){
            toggle = true;
            view.feedbackDisplay();
        }
        else {
            toggle = false;
            missedGuesses++;
            view.feedbackDisplay();
        }
        view.statsDisplay();
    },

    //Creates a random guess between two values stored as magicNumber
    randomNumber: function(max, min){
        var low = Math.ceil(min);
        var high = Math.floor(max);
        magicNumber = Math.floor(Math.random() * (high - low + 1) + low);
        view.numDisplayMessage();
        console.log(magicNumber);
    }
}


var handlers = {

    guessButton: function(){
        //Pulls Guessed Number from Input
        var guessNum = document.getElementById("guess");
        guessingGame.playerGuess(guess.valueAsNumber);
        guess.value = "";
    },

    //This will be changing soon, about to be completly revamped
    gameDifficulty: function(){
        var gameModal = document.getElementById("gameModal");
        gameModal.style.display = "block";

        gameModal.addEventListener("click", function(event){
            if (event.target.className === "easy"){
                guessingGame.randomNumber(10,1);
                gameModal.style.display = "none";
            }

            else if (event.target.className === "normal"){
                guessingGame.randomNumber(100,1);
                gameModal.style.display = "none";
            }

            else if (event.target.className === "hard") {
                guessingGame.randomNumber(1000,1);
                gameModal.style.display = "none";
            }

            else {
                //Add in feedback for this later
                console.log("please try again")
            }
        })
    }
}


var view = {
    feedbackDisplay: function(){
        var display = document.getElementById("display");
        //Sets Display when answer is guessed correctly
        if (toggle === true){
            display.textContent = "Correct"
        }
        //Sets Display when guessed incorrectly
        else {
            display.textContent = "Wrong"
        }
    },

    //Creates updated counter of missed guesses
    statsDisplay: function (){
        var counterDisplay = document.getElementById("counterDisplay");
        counterDisplay.textContent = missedGuesses;
    },

    //Displays a message when the number has been chosen to try to guess
    numDisplayMessage: function (){
        var readyPlayDisplay = document.getElementById("readyPlayDisplay");
        readyPlayDisplay.textContent = "You can start guessing now!";
    }
}
