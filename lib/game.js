const $ = require('jquery');

var assARRAY = ['grunt','grunt','shirt','towel','jesus','jorge','jesus','girly','gushy','tanks'];

var lingo = new Lingo();
var mysteryWord = lingo.generateMysteryWord(assARRAY);
var mysteryWordArray = lingo.generateWordArray(mysteryWord);

function mysteryRow(){
  return "<tr class = 'header-tile'><th class ='orange'>"+mysteryWordArray[0]+"</th><th><span hidden>"+mysteryWordArray[1]+"</span></th><th><span hidden>"+mysteryWordArray[2]+"</span></th><th><span hidden>"+mysteryWordArray[3]+"</span></th><th><span hidden>"+mysteryWordArray[4]+"</span></th></tr>";
}

$('.input-tile').before(mysteryRow());
function Lingo(){
  $(document).ready(function(){
    $('#start-button').on('click',function(){
    });
  });
  Lingo.prototype.generateMysteryWord = function(array) {
      var mysteryWord = array[(Math.floor(Math.random()*(array.length)))];
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
      setTimeout( function(){
        location.replace("end.html");
        $('.mystery-word').text('You should have guessed:'+mysteryWord+'.<br> Better luck next time!');
      }, 2500);
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
    // debugger;
    // var scoreUpOne = (function() {
    //   var score = 0;
    //   return function() {return score+=1;};
    // })();
    // $('#current-score').text(scoreUpOne);
    // store(scoreUpOne);
    setTimeout(location.reload.bind(location), 600);
  }
  if (event.which === 13) {
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
  if (event.keyCode >= 97 && event.keyCode <= 122 ) {
    return true;
  }
}
function checkUserGuess(userWordArray, mysteryWordArray){
  var colorArray = [];
  for (var i = 0; i < userWordArray.length; i++) {
    var lingo = new Lingo();
    var character = userWordArray[i];
    var mysteryCharacter = mysteryWordArray[i];
    if (character === mysteryCharacter) {
      colorArray.push('orange');
    } else if (lingo.checkWordArrayForLetter(mysteryWordArray, character)){
      colorArray.push('yellow');
    } else {
      colorArray.push('none');
    }
  }
  return colorArray;
}
var store = function(score){
    localStorage.setItem('userScore', JSON.stringify(score));
};
function isGameOver(){
    var addedRowsCount = $('.added-row').length;
    if (addedRowsCount === 5){
      return true;
    } else { return false; }
}
}
module.exports = Lingo;
