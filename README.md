# Vanilla JS Number Guess Game

## Update 1.1 1/24/2018
For the most part the modal JavaScript features have been implemented. I don't have the styling done to make the modal look nice as of yet, but the modal is working correctly using the three difficulty settings. The CSS I shall be working on over time as I am working on a separate project for that also.

Added in a Display Message on game load to tell the player to choose a difficulty level. In addition, I also set this up and refactored slightly to add in the display message telling the player to start guessing now. Was a simple fix but I didn't think about it till after I already added a new method for the difficulty display message was added in.


## Update 1.0 12/19/2017
Technically this would be an update beyond this but I was not keeping track of the work as I should have. At this point in the project I have most of the basic elements created and now I need to expand on it. I shall create a list below here for the elements that I plan on working on and will update as things are accomplished or added on to.

For now, we have a place where a user can enter a range of numbers to guess between, we have input for the users guess once the numbers have been selected, we have feedback for if the guess was right or wrong, we also feedback on how many times the user had missed. There is a lot still to do, but one step at a time.

Itemized Update List:
1. The entire Readme document
2. The entire project up to this point (detailed above)
3. The building process to this point (for future consideration)



### Additions in the pipeline

#### CSS Work:
1. I need to start working on the CSS for the page. I want to try to at least get the basic grid setup for this so things are ordered correctly. Then I can work on getting the fonts closer to the correct sizes as well. This will not be all inclusive as of now, I just want to start working in the main features to make sure the aesthetics are easier to place and think about really.

#### JS Work:
1. I need to create a “Give Up” button. This button will serve two functions. The first function, as the name goes, will be to give up if you are tired of guessing numbers. The second function will be to reset the gameBoard once you have guessed the correct option.

2. A hint button. This will only be active once the first guess has been submitted. This feature will look at the last guess you made and compare it to the magicNumber. If you were lower then the magicNumber, it will tell you to guess higher, if you guessed too high, guess lower. Simple enough feature. This will also cost the user (at least) 1 guess towards your missed guesses stats section.

3. In the stats section, I would like the game to track how much time it took the user to guess the correct number. Not sure how the format will work yet, or even how to do this, much research will need to be done.

4. In the stats section, I need there to be a comparison done between number of guesses once completed to give the player a simple accuracy rating. This should be fairly straight forward to add in.

5. There will be a message window for the game to make fun of the user or make various sarcastic remarks. Just something sort of fun to add to this. This can be tied to the difficulty level in addition to the number of missed guesses

6. I need to create verification systems for the current (and future) buttons that will only allow access to features once certain conditions have been met. For instance, currently I should only be able to enter a guess once a random number has been generated. If the number has not been created, the guess should be unusable or pop up an error message.

#### JS Work: Completed
1. Mega Feature: The random number generator that is currently in use will need a complete revamp. I want the game to start with a popup modal (if possible) in order for the player to choose a difficulty on game start. There will be 3 possible difficulties:
   * Easy: 1 to 10
   * Mid: 1 to 100
   * Hard: 1 to 1000

   This will deprecate the old system and allow me to pull that feature out of the current version of the page. The numbers will be
   pulled from the difficulty setting that the players choose. I believe this will be quite difficult to setup (for my skill level) and
   will probably need to do some refactoring all over the code to get it working properly.

   This will also need to probably worked alongside the more in-depth CSS features as it will change the whole layout of the   
   current display. I will likely need to break this step down further once I get to working it into the web app.
