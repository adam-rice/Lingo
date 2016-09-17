const $ = require('jquery');

function Lingo(){
  $(document).ready(function(){
    $('#start-button').on('click',function(){
    });
  });

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

  Lingo.prototype.generateMysteryWord = function(array) {
      var mysteryWord = array[(Math.floor(Math.random()*(array.length)))];
      return mysteryWord;
  };

  Lingo.prototype.getCharIndex = function(wordArray, character) {
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === character) {
        return i;
      }
    }
  };

  Lingo.prototype.getGridColor = function (wordArray, character, index) {
     var mysteryCharacterIndex = this.getCharIndex(wordArray, character);
     if (mysteryCharacterIndex === index) { return 'green'; }

     var characterExistsInWord = this.checkWordArrayForLetter(wordArray, character);
     if (characterExistsInWord) { return 'yellow'; }
     else { return 'red'; }
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
  function getWordArray(){
    var wordArray = guess.map(function(){
       return this.value;
    }).get();
    return wordArray;
  }
  function newWordRow(){
    var wordArray = getWordArray();
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
  }
  if (event.which === 46) { // DELETE KEY EVENT LISTENER
      console.log('delete');
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
