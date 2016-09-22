const assert = require('chai').assert;
const Lingo = require('../lib/game');
const Score = require('../lib/score');
const $ = require('jquery');
const completeWordList = require('../lib/wordscomplete');

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
    $('input').on('keypress',function(){
    var arrayOne = ['a', 'p', 'p', 'l', 'e'];
    var arrayTwo = ['a', 'p', 'p', 'l', 'e'];
    var colorArray = checkUserGuess(arrayOne, arrayTwo);
    assert.equal(colorArray, ['orange', 'orange', 'orange', 'orange', 'orange']);
  });
  });
  it('should not return an array of five orange tiles when a player guesses a correct word.', function () {
    $('input').on('keypress', function(){
    var arrayOne = ['a', 'p', 'p', 'x', 'e'];
    var arrayTwo = ['a', 'p', 'p', 'l', 'e'];
    var colorArray = checkUserGuess(arrayOne, arrayTwo);
    assert.notEqual(colorArray, ['orange', 'orange', 'orange', 'orange', 'orange']);
  });
  });

  it('should return false if the letter has already been found.', function () {
    $('input').on('keypress',function(){
    var mysteryarray = ['a', 'p', 'p', 'l', 'e'];
    var userArray = ['p', 'p', 'p', 'l', 'e'];
    var character = 'p';
    assert.equal(letterFound(mysteryarray, userArray, character), false);
  });
  });
  it('should return true if the letter has already been found.', function () {
    $('input').on('keypress', function(){
    var mysteryarray = ['a', 'p', 'p', 'l', 'e'];
    var userArray = ['p', 'p', 'p', 'l', 'e'];
    var character = 'p';
    assert.equal(letterFound(mysteryarray, userArray, character), true);
  });
  });
  it('should return a yellow tile if a player guesses a correct letter but in the incorrect position and that letter has not already been found.', function () {
    $('input').on('keypress', function(){
      var lingo = new Lingo();
      var mysteryarray = ['p','e','a','c','h'];
      var userArray = ['o','p','i','n','e'];
      var character = 'p';
      assert.equal(lingo.checkWordArrayForLetter(mysteryarray, character) && letterFound(mysteryarray, userArray, character));
    });
  });
  it('should iterate the score up one on update score', function(){
    var score = 0;
    score = Score.updateScore(score);
    assert.equal(score, 1);
  });
  it('should update the high score if the current score is greater', function(){
    var score = 5;
    var highScore = 4;
    highScore = Score.updateHighScore(score);
    assert.equal(score, 5);
  });
  it('should NOT update the high score if the current score is not greater', function(){
    var score = 3;
    var highScore = 4;
    highScore = Score.updateHighScore(score, highScore);
    assert.equal(highScore, 4);
  });
  it('should check whether the user guessed a word from the dictionary', function(){
    var userWord = 'hello';
    var bool = function() {if ($.inArray(userWord, completeWordList) !== -1) {
      return true;
    }
  };
    assert.equal(bool(), true);
  });
  it('should accept characters that are letters using the RegExp', function(){
    var letter = 'a';
    var regex = new RegExp("^[a-zA-Z]+$");
    assert.equal(regex.test(letter), true);
  });
  it('should not accept characters that are not letters using the RegExp', function(){
    var digit = 1;
    var regex = new RegExp("^[a-zA-Z]+$");
    assert.equal(regex.test(digit), false);

  });
  it('isWord should be a function', function(){
    $('input').on('keypress', function(){
      assert.isFunction(isWord());
    });
  });
  it.skip('checkUserGuess should be a function', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('checkUserGuess should return an array', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('should return an array of none if none of the letters are guessed', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('letterFound should be a function', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('letterFound should take three arguments', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('isGameOver should be a function', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('isLetter should be a function', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('isLetter should return true on a letter keypress', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('getUserWordArray should be a function', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('getUserWordArray should return an array', function() {
    $('input').on('keypress', function(){
    });
  });
  it.skip('newWordRow should be a function', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('should return true when orangeArray.length is 5', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('isRowFilled should be a function', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('should toggleClass when the user guessed a correct word', function(){
    $('input').on('keypress', function(){
    });
  });
  it.skip('Score should be an object', function(){
    assert.isObject(Score);
  });
  it.skip('retrieveHighScore should be a function', function(){

  });
  it.skip('should return a high score when the user retrieveHighScore', function(){

  });
  it.skip('retrieveCurrentScore should be a function', function(){

  });
  it.skip('should return a user score when the user retrieveCurrentScore', function(){

  });
  it.skip('clearStorage should be a function', function(){

  });
  it.skip('storeMysteryWord should be a function', function(){

  });
  it.skip('storeCurrentScore should be a function', function(){

  });
  it.skip('storeHighScore should be a function', function(){

  });
  it.skip('renderScore should be a function', function(){

  });
  it.skip('endGame should be a function', function(){

  });
  it.skip('localStorage getItem mysteryWord should return a word', function(){

  });
});
