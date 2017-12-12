var magicNumber = 0;
var missedGuesses = 0;

var guessingGame = {

    //compares magicNumber to Guessed Number
    playerGuess: function(num){
        if (num === magicNumber){
            console.log("correct");
            console.log("You guessed wrong: " + missedGuesses + " times.");
        }
        else {
            console.log("wrong");
            missedGuesses++;
        }
    },

    //Creates a random guess between two values stored as magicNumber
    randomNumber: function(max, min){
        min = Math.ceil(min);
        max = Math.floor(max);
        magicNumber = Math.floor(Math.random()* (max - min + 1) * min);
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

    randomGenButton: function(){
        //Sets Max and Min Values for Guessing Game
        var maxNumber = document.getElementById("maxNumber");
        var minNumber = document.getElementById("minNumber");
        guessingGame.randomNumber(maxNumber.valueAsNumber, minNumber.valueAsNumber);
        maxNumber.value = "";
        minNumber.value = "";
    }
}
