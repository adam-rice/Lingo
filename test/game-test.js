const assert = require('chai').assert;
const Lingo = require('../lib/game');

describe('Lingo', function(){
  it('should be an object', function(){
    var lingo = new Lingo();
    assert.isObject(lingo);
  });
   it('should select a mystery word from the pool of possible words', function(){
     var lingo = new Lingo()
     var array = ['sport','mulch','foams','phone','grunt'];
     var mysteryWord = lingo.generateMysteryWord(array);
     assert.include(array, mysteryWord);
   });
   it('should split a word into an array', function() {
     var lingo = new Lingo();
     var array = lingo.generateWordArray('grunt')
     assert.equal(array[0], 'g')
   })
   it('should be able to check if a word includes a given letter', function() {
     var lingo = new Lingo();
     var answer = lingo.checkWordArrayForLetter('alex', 'x')
     assert.isTrue(answer)
     // yellow
   })
   it('should check the index of the character in the array', function() {
     var lingo = new Lingo();
     var alexArray = lingo.generateWordArray('alex');
     var index = lingo.getCharIndex(alexArray, 'x');
     assert.equal(index, 3)
     // green
   })
   it('should return a color if the character is included in the mystery word', function () {
     var lingo = new Lingo();
     var color = lingo.getGridColor('alex', 'z', 3);
     assert.equal(color, 'red')
   })
   it.skip('should unhide the first letter of the mystery word to the player');
   it.skip('should allow input from the player in all five open tiles');
   it.skip('should only be allowed if it is a valid word');
   it.skip('should display in a new row if input word is valid');
   it.skip('should  of correct-spot and display in unique styling if a letter is in the correct spot');
   it.skip('should add a class of incorrect-spot and display in a unique way if a letter is in the mystery word but the incorrect spot');
   it.skip('should track each guess');
   it.skip('should run correct-word animation if mystery word is guessed');
   it.skip('should randomly select a new mystery word if mystery word is guessed');
   it.skip('should display the first letter of the new mystery word');
   it.skip('should have a maximum number of guesses');
   it.skip('should end the game when the player has guessed the maximum number of guesses');
   it.skip('should display the end-game page to the player when the game is over');

   describe('Timed', function(){
     it.skip('should start a timer when the game starts');
     it.skip('should contain a timer that is displayed to the player');
     it.skip('should contain a timer that counts down each second');
     it.skip('should track when a word is guessed according to the timer');
     it.skip('should end the game when the timer has expired');
   });
 });
