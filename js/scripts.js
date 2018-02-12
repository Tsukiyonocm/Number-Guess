window.onload = function(){
    guessingGame.init();
}

var magicNumber = 0;
var missedGuesses = 0;
var toggle = false;


var guessingGame = {

    //Loads everything needed for page load
    init: function(){
        view.gameDifficultyMessage();
    },

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
        view.gameDifficultyMessage();
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

    //Takes input from Modal and updates game mode variables
    gameDifficulty: function(){
        var gameModal = document.getElementById("gameModal");
        gameModal.style.display = "block";

        gameModal.addEventListener("click", function difficulty(event){
            if (event.target.className === "easy"){
                guessingGame.randomNumber(10,1);
                gameModal.style.display = "none";
                gameModal.removeEventListener("click", difficulty);
            }

            else if (event.target.className === "normal"){
                guessingGame.randomNumber(100,1);
                gameModal.style.display = "none";
                gameModal.removeEventListener("click", difficulty);
            }

            else if (event.target.className === "hard") {
                guessingGame.randomNumber(1000,1);
                gameModal.style.display = "none";
                gameModal.removeEventListener("click", difficulty);
            }

            else {
                //Add in feedback for this later
                console.log("please try again")
                gameModal.style.display = "none";
                gameModal.removeEventListener("click", difficulty);
            }
        })
    },

    //Resets Game
    reset: function(){
        magicNumber = 0;
        view.gameDifficultyMessage();
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

    //Display Message to choose Difficulty level
    gameDifficultyMessage: function(){
        var gameDifficultyMessage = document.querySelector(".gameDifficultyMessage");
        var readyPlayDisplay = document.getElementById("readyPlayDisplay");
        //locks and unlocks inputs
        var guessUnlock = document.getElementById("guess");
        var guessBtnUnlock = document.querySelector(".guessInputBtn");

        if (magicNumber === 0){
            gameDifficultyMessage.style.display = "block";
            guessUnlock.disabled = true;
            guessBtnUnlock.disabled = true;
        }
        else {
            gameDifficultyMessage.style.display = "none";
            readyPlayDisplay.textContent = "You can start guessing now!";
            guessUnlock.disabled = false;
            guessBtnUnlock.disabled = false;
        }
    }
}
