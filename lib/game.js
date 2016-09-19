const $ = require('jquery');
const Score = require('../lib/score');
const mysteryWordARRAY = require('../lib/words');

var lingo = new Lingo();
var mysteryWord = lingo.generateMysteryWord(mysteryWordARRAY);
var mysteryWordArray = lingo.generateWordArray(mysteryWord);

function mysteryRow(){
  return "<tr class = 'header-tile'><th class ='orange'>"+mysteryWordArray[0]+"</th><th><span>-</span></th><th><span>-</span></th><th><span>-</span></th><th><span>-</span></th></tr>";
}

$('.input-tile').before(mysteryRow());
function Lingo(){
  $(document).ready(function(){
    $('#start-button').on('click',function(){
    });
  });
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
      if (wordArray[i] === character) {
        return true;
      }
    }
  };
  Lingo.prototype.getCharIndex = function(wordArray, character) {
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === character) {
        return i;
      }
    }
  };
  Lingo.prototype.countCharacterOccurences = function(wordArray, character){
    var countChar = 0;
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === character){
        countChar++;
      }
    }
    return countChar;
  };
  Lingo.prototype.decrementCharacterOccurences = function(countChar){
    countChar--;
    return countChar;
  };

var guess = $('input').on('keypress',function(event){
  if (isLetter(event)) {
    var nextInput = guess.get(guess.index(this)+1);
    if (nextInput) { nextInput.focus(); }
  }
  function swapRow(){
    var row = guess.closest('tr');
    row.insertAfter(row.next());
  }
  function clearInputRow(){
    guess.map(function(){
      return this.value = "";
    });
  }
  function getUserWordArray(){
    var userWordArray = guess.map(function(){
       return this.value;
    }).get();
    return userWordArray;
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
      setTimeout( function(){
        location.replace("end.html");
      }, 3000);
    } if (isGameOver() === true && orangeArray.length === 5) { $('.mystery-word').html('<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>'+'<span class="mystery"> '+mysteryWord+'!</span>');
    }
    return newRow;
  }
  function prependRow(){
    guess.closest('tr').after(newWordRow());
    clearInputRow();
    swapRow();
    removeRow();
    $('#one').focus();
}
  function correctGuess(){
    // var scoreUpOne = (function() {
    //   var score = 0;
    //   return function() {return score+=1;};
    // })();
    // $('#current-score').text(scoreUpOne);
    // store(scoreUpOne);
    setTimeout(location.reload.bind(location), 1200); }
    if (event.which === 13) {
      isRowFilled();
      prependRow();
      $.done();
  }
});

$('input').keydown(function(){ // DELETE KEY NOT PERFECT
  if (event.which === 8) {
    var lastInput = guess.get(guess.index(this)-1);
    if ($('#column-last').val() === '') { lastInput.focus(); }
  }
});
function removeRow() {
  $('tr:last').remove();
}
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

function isRowFilled(event) {
  if ($('#column-last').val().length < 1 )
    { $(event.keyCode === 13);
        return false;
    }
}

function checkUserGuess(userWordArray, mysteryWordArray){
  var colorArray = [];
  for (var i = 0; i < userWordArray.length; i++) {
    var lingo = new Lingo();
    if (userWordArray[i] === mysteryWordArray[i]) {
      colorArray.push('orange');
    } else if (lingo.checkWordArrayForLetter(mysteryWordArray, userWordArray[i])){
      colorArray.push('yellow');
    } else {
      colorArray.push('none');
    }
  }
  return colorArray;
}
// var store = function(score){
//     localStorage.setItem('userScore', JSON.stringify(score));
// };
function isGameOver(){
    var addedRowsCount = $('.added-row').length;
    if (addedRowsCount === 5){
      return true;
    } else { return false; }
}
}
module.exports = Lingo;
