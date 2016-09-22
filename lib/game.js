const $ = require('jquery');
const Score = require('../lib/score');
const mysteryWordARRAY = require('../lib/words');
const completeWordList = require('../lib/wordscomplete');


var lingo = new Lingo();
var mysteryWord = lingo.generateMysteryWord(mysteryWordARRAY);
var mysteryWordArray = lingo.generateWordArray(mysteryWord);

function initializeScores (){
  var highScore = Score.retrieveHighScore();
  var currentScore = Score.retrieveCurrentScore();
  Score.renderScore(currentScore, highScore);
}
initializeScores();
$('h1').toggleClass('glow');

function mysteryRow(){
  return "<tr class = 'header-tile'><th class ='orange'>"+mysteryWordArray[0]+"</th><th><span class='dash'>-</span></th><th><span class='dash'>-</span></th><th><span class='dash'>-</span></th><th><span class='dash'>-</span></th></tr>";
}
$('.input-tile').before(mysteryRow());

function Lingo(){
  Lingo.prototype.generateMysteryWord = function(array) {
      var mysteryWord = array[(Math.floor(Math.random()*(array.length)))];
      console.log(mysteryWord);
      return mysteryWord;
  };
  Lingo.prototype.generateWordArray = function(word) {
    return word.toLowerCase().split('');
  };
  Lingo.prototype.checkWordArrayForLetter = function(wordArray, character) {
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === character ) {
        return true;
      }
    }
  };

$('input').on('keypress',function(event){
  var guess = $('input');
  if (isLetter(event)) {
    var nextInput = guess.get(guess.index(this)+1);
    if (nextInput) { nextInput.focus(); }
  }
  if (isRowFilled(event) && (isWord())) {
    prependRow(guess);
  }
});

function isRowFilled(event) {
  var guess = $('input');
  var userWordArray = guess.map(function(){
    return this.value;
  }).get();
  if(event.keyCode === 13){
    for (var i = 0; i < userWordArray.length; i++) {
      if(userWordArray[i] === ""){
        return false;
      }
    }
    return true;
  }
}

function newWordRow(){
  var userWordArray = getUserWordArray();
  var colorArray = checkUserGuess(userWordArray,mysteryWordArray);
  var orangeArray = [];
  var newRow = "<tr class='letter-tile added-row'><td class= "+colorArray[0]+">"+userWordArray[0]+"</td><td class="+colorArray[1]+">"+userWordArray[1]+"</td><td class="+colorArray[2]+">"+userWordArray[2]+"</td><td class="+colorArray[3]+">"+userWordArray[3]+"</td><td class="+colorArray[4]+">"+userWordArray[4]+"</td></tr>";
  for (var i = 0; i < colorArray.length; i++) {
    if (colorArray[i] === 'orange'){
      orangeArray.push("");
    }
    if (orangeArray.length === 5) {
      correctGuess();
    }
  }
  if (isGameOver() === true && orangeArray.length !== 5){
    $('.mystery-word').html('You should have guessed: <span class="mystery"> '+mysteryWord+'.</span> Better luck next time!');
    Score.storeMysteryWord(mysteryWord);
    setTimeout( function(){
      location.replace("../end.html");
    }, 4000);
  } if (isGameOver() === true && orangeArray.length === 5) { $('.mystery-word').html('<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>');
}
return newRow;
}

function prependRow(guess){
  guess.closest('tr').after(newWordRow());
  clearInputRow(guess);
  swapRow(guess);
  removeRow(guess);
  $('#one').focus();
}
function swapRow(guess){
  var row = guess.closest('tr');
  row.insertAfter(row.next());
}
function clearInputRow(guess){
  guess.map(function(){
    return this.value = "";
  });
}
function removeRow() {
  $('tr:last').remove();
}
function getUserWordArray(){
  var guess = $('input');
  var userWordArray = guess.map(function(){
    return this.value;
  }).get();
  return userWordArray;
}
function correctGuess(){
  var currentScore = parseInt(Score.retrieveCurrentScore());
  var checkHighScore = parseInt(Score.retrieveHighScore());
  var newScore = Score.updateScore(currentScore);
  var bestScore = Score.updateHighScore(newScore, checkHighScore);
  Score.renderScore(newScore, bestScore);
  Score.storeCurrentScore(newScore);
  Score.storeHighScore(bestScore);
  $('h1').toggleClass('glow');
  setTimeout(location.reload.bind(location), 1000);
}
$('input').keydown(function(){
  var guess = $('input');
  if (event.which === 8) {
    var lastInput = guess.get(guess.index(this)-1);
    if ($('#column-last').val() === '') { lastInput.focus(); }
  }
});
function isLetter(event){
  if (event.which >= 97 && event.which <= 122 ) {
    return true;
  }
}

$('input').bind('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});

function isWord() {
  var guess = $('input');
  var userWordArray = guess.map(function(){
    return this.value;
  }).get();
  var userWord = userWordArray.join('');
  if ($.inArray(userWord, completeWordList) !== -1) {
    return true;
  }
}

function checkUserGuess(userWordArray, mysteryWordArray){
  var colorArray = [];
  for (var i = 0; i < userWordArray.length; i++) {
    var lingo = new Lingo();
    if (userWordArray[i] === mysteryWordArray[i]) {
      colorArray.push('orange');
    } else if  (lingo.checkWordArrayForLetter(mysteryWordArray, userWordArray[i]) && letterFound(mysteryWordArray, userWordArray, userWordArray[i])) {
      colorArray.push('yellow');
    } else {
      colorArray.push('none');
    }
  }
  return colorArray;
}
function letterFound(mysteryWordArray, userWordArray, character){
  var mysteryWordCount = [];
  var userWordCount = [];
  for (var i = 0; i < mysteryWordArray.length; i++) {
    if (mysteryWordArray[i] === character){
      mysteryWordCount.push(i);
    }
    if (userWordArray[i] === character){
      userWordCount.push(i);
    }
  }
  for (var j = 0; j < mysteryWordCount.length; j++){
    if (userWordCount.includes(mysteryWordCount[j])){
      return false;
    } else {return true;}
  }
}
function isGameOver(){
    var addedRowsCount = $('.added-row').length;
    if (addedRowsCount === 5){
      return true;
    } else { return false; }
  }
}
module.exports = Lingo;
