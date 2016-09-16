const $ = require('jquery');

function Lingo(){
  $(document).ready(function(){
    $('#start-button').on('click',function(){
      console.log('congrats');
      // generateMysteryWord();
      // hideMysteryWord();
      // renderMysteryWord();
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
    if (nextInput) {
    nextInput.focus();
  } else { event.preventDefault();}
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
  if (rowIsFilled() === true) { //Continually replace last letter on keypress;
    if (isLetter(event) === true) {
      $('.letter-last').val(String.fromCharCode(event.which));
    }
    // swapRow();
    if (event.which === 13) {
      prependRow();
      swapRow();
      clearInputRow();
      scanTron();
    }
     //get finds the Nth element in the matched element set
  }
  //If the rowIsFilled(); and a key is pressed, replace the last letter in the row with keyCode
  //On enter submit the row to the scanTron. (UI / RULES NEEDS TO INDICATE WHY ENTER)
  if (event.which === 46) { // DELETE KEY EVENT LISTENER
    console.log('delete');
    var lastInput = guess.get(guess.index(this)-1); //get finds the Nth element in the matched element set
    if (lastInput) {
      lastInput.focus();
    }
    //Should return user to next cell over
    }
    //SHOULD ANYTHING HAPPEN WHEN THE ARROW KEYS ARE PRESSED? NAVIGATE THROUGH THE INPUT GRID?
  });
}

function isLetter(event){
  if (event.keyCode >= 97 && event.keyCode <= 122 ) {
    return true;
  }
}

function rowIsFilled(){
  if ($('.letter-last').val() !== "") { // Need to make sure that blank spaces cannot be submitted
    console.log('is filled');
    return true;
  }
}

function scanTron(){
  if (event.which === 13) {
    console.log('enter');
    return $('.input-tile').css('background-color','yellow');
    // Submit to scanTron
    //The scanTron returns the results (x color in correct place, y color if wrong place, z color not in the word)
  }
}

module.exports = Lingo;
