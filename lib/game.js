const $ = require('jquery');

var assARRAY = ['grunt','grunt','shirt','towel','jesus','jorge','jesus','girly','gushy','tanks'];

var lingo = new Lingo();
var mysteryWord = lingo.generateMysteryWord(assARRAY);
var mysteryWordArray = lingo.generateWordArray(mysteryWord);

function mysteryRow(){
  return "<tr class = 'header-tile'><th>"+mysteryWordArray[0]+"</th><th><span hidden>"+mysteryWordArray[1]+"</span></th><th><span hidden>"+mysteryWordArray[2]+"</span></th><th><span hidden>"+mysteryWordArray[3]+"</span></th><th><span hidden>"+mysteryWordArray[4]+"</span></th></tr>";
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
  Lingo.prototype.getGridGreen = function (wordArray, character, index) {
     var mysteryCharacterIndex = this.getCharIndex(wordArray, character);
     if (mysteryCharacterIndex === index) { return 'green'; }
   };
  Lingo.prototype.getGridYellow = function (wordArray, character) {
     var characterExistsInWord = this.checkWordArrayForLetter(wordArray, character);
     if (characterExistsInWord) { return 'yellow'; }
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
    var wordArray = guess.map(function(){
       return this.value;
    }).get();
    return wordArray;
  }
  function newWordRow(){
    var wordArray = getUserWordArray();
    return "<tr class = 'letter-tile'><td>"+wordArray[0]+"</td><td>"+wordArray[1]+"</td><td>"+wordArray[2]+"</td><td>"+wordArray[3]+"</td><td>"+wordArray[4]+"</td></tr>";
  }
  function prependRow(){
    guess.closest('tr').after(newWordRow());
  }
  if (event.which === 13) {
    prependRow();
    swapRow();
    clearInputRow();
    removeRow();
    $('#1').focus();
  }
});

$('input').keydown(function(){ // DELETE KEY NOT PERFECT
  if (event.which === 8) {
    console.log('delete');
    var lastInput = guess.get(guess.index(this)-1);
    if (lastInput) { lastInput.focus(); }
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
}
module.exports = Lingo;
