var magicNumber = 0;
var missedGuesses = 0;

//Compares magicNumber to the guessed number.
function compareGuess (num){
    if (num === magicNumber){
        console.log("correct");
        console.log("You guessed wrong: " + missedGuesses + " times.");
    }
    else {
        console.log("wrong");
        missedGuesses++;
    }
}

//Generates a randomNumber stored in magicNumber.
function randomNumber (max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    magicNumber = Math.floor(Math.random()* (max - min + 1) * min);
    console.log(magicNumber);
}
