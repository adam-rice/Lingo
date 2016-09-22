const assert = require('chai').assert;
const Lingo = require('../lib/game');
const Score = require('../lib/score');

describe('Lingo', function(){
  it('should be an object', function(){
    var lingo = new Lingo();
    assert.isObject(lingo);
  });
  it('should select a mystery word from the pool of possible words', function(){
     var lingo = new Lingo();
     var array = ['sport','mulch','foams','phone','grunt'];
     var mysteryWord = lingo.generateMysteryWord(array);
     assert.include(array, mysteryWord);
  });
  it('should split a word into an array', function() {
     var lingo = new Lingo();
     var array = lingo.generateWordArray('grunt');
     assert.equal(array[0], 'g');
  });
  it('should be able to check if a word includes a given letter', function() {
     var lingo = new Lingo();
     var answer = lingo.checkWordArrayForLetter('alex', 'x');
     assert.isTrue(answer);
     // yellow
  });
  it('should return an array of five orange tiles when a player guesses a correct word.', function () {
    var arrayOne = ['a', 'p', 'p', 'l', 'e'];
    var arrayTwo = ['a', 'p', 'p', 'l', 'e'];
    var colorArray = checkUserGuess(arrayOne, arrayTwo);
    assert.equal(colorArray, ['orange', 'orange', 'orange', 'orange', 'orange']);
  });
  it('should not return an array of five orange tiles when a player guesses a correct word.', function () {
    var arrayOne = ['a', 'p', 'p', 'x', 'e'];
    var arrayTwo = ['a', 'p', 'p', 'l', 'e'];
    var colorArray = checkUserGuess(arrayOne, arrayTwo);
    assert.notEqual(colorArray, ['orange', 'orange', 'orange', 'orange', 'orange']);
  });

  it('should return false if the letter has already been found.', function () {
    var mysteryarray = ['a', 'p', 'p', 'l', 'e'];
    var userArray = ['p', 'p', 'p', 'l', 'e'];
    var character = 'p';
    assert.equal(letterFound(mysteryarray, userArray, character), false);
  });
  it('should return false if the letter has already been found.', function () {
    var mysteryarray = ['a', 'p', 'p', 'l', 'e'];
    var userArray = ['p', 'p', 'p', 'l', 'e'];
    var character = 'p';
    assert.equal(letterFound(mysteryarray, userArray, character), true);
  });
  it('should return a yellow tile if a player guesses a correct letter but in the incorrect position and that letter has not already been found.', function () {

  });
  it('should iterate the score up one on update score', function(){

  });
  it('should update the high score if the current score is greater', function(){

  });
  it('should NOT update the high score if the current score is not greater', function(){

  });
  it('should check whether the user guessed a word from the dictionary', function(){

  });
  it('should not accept characters that are not letters using the RegExp', function(){

  });
  it('should accept characters that are letters using the RegExp', function(){

  });
  it('isWord should be a function', function(){

  });
  it('checkUserGuess should be a function', function(){

  });
  it('checkUserGuess should return an array', function(){

  });
  it('should return an array of none if none of the letters are guessed', function(){

  });
  it('letterFound should be a function', function(){

  });
  it('letterFound should take three arguments', function(){

  });
  it('isGameOver should be a function', function(){

  });
  it('isLetter should be a function', function(){

  });
  it('isLetter should return true on a letter keypress', function(){

  });
  it('getUserWordArray should be a function', function(){

  });
  it('getUserWordArray should return an array', function() {

  });
  it('newWordRow should be a function', function(){

  });
  it('should return true when orangeArray.length is 5', function(){

  });
  it('isRowFilled should be a function', function(){

  });
  it('should toggleClass when the user guessed a correct word', function(){

  });
  it('Score should be an object', function(){
    assert.isObject(Score);
  });
  it('retrieveHighScore should be a function', function(){

  });
  it('should return a high score when the user retrieveHighScore', function(){

  });
  it('retrieveCurrentScore should be a function', function(){

  });
  it('should return a user score when the user retrieveCurrentScore', function(){

  });
  it('clearStorage should be a function', function(){

  });
  it('storeMysteryWord should be a function', function(){

  });
  it('storeCurrentScore should be a function', function(){

  });
  it('storeHighScore should be a function', function(){

  });
  it('renderScore should be a function', function(){

  });
  it('endGame should be a function', function(){

  });
  it('localStorage getItem mysteryWord should return a word', function(){

  });
});
