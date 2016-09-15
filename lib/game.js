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

var guess = $('input').on('keypress',function(event){
    if (isLetter(event) === true) {
      console.log(event.keyCode);
    } else {
      event.preventDefault();
    }
    if (isGridFull() === true) {
      var nextInput = guess.get(guess.index(this)+1); //get finds the Nth element in the matched element set
      if (nextInput) {
        nextInput.focus();
      }
    }
    function getWordArray(){
      var wordArray = guess.map(function(){
         return this.value;
      }).get();
      return wordArray;
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
    function renderWord(){
      var wordRow = guess.closest('tr').prev();
      debugger;
    }
    if (rowIsFilled() === true) { //Continually replace last letter on keypress;
      if (isLetter(event) === true) {
        $('.letter-last').val(String.fromCharCode(event.which));
      }
      // swapRow();
      if (event.which === 13) {
        getWordArray();
        swapRow();
        renderWord();
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

function isGridFull(){
    if ($(document).find('letter-guess').val() !== "") { // Ensure
      return true;
    }
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

function generateMysteryWord(){
  // generate random number
  var array = ['sport','mulch','foams','phone','grunt'];
  var mysteryWord = array[(Math.floor(Math.random()*(array.length)))];
  // return array[randomize]
  return mysteryWord;
}

function hideMysteryWord() {
  var mysteryCharacterArray = generateMysteryWord().split("");
  for (var i = 1; i < mysteryCharacterArray.length; i++) {
    // mysteryCharacterArray = mysteryCharacterArray[i].hide();
  }
  return mysteryCharacterArray;
}

function renderMysteryWord() {
  // Display on the header-tile class
}


module.exports = Lingo;
