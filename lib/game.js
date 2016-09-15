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
    if (rowIsFilled() === true) {
      debugger;
      $(document).find('letter-last').val(String.fromCharCode(event.which));
    }
    //If the rowIsFilled(); and a key is pressed, replace the last letter in the row with keyCode
    //On enter submit the row to the scanTron. (UI / RULES NEEDS TO INDICATE WHY ENTER)
    //The scanTran returns the results (x color in correct place, y color if wrong place, z color not in the word)
    if (event.which === 13) { // ENTER KEY EVENT LISTENER
      console.log('enter');
      // Submit to scanTron
    }
    if (event.which === 46) { // DELETE KEY EVENT LISTENER
      console.log('delete');
    }
    //SHOULD ANYTHING HAPPEN WHEN THE ARROW KEYS ARE PRESSED? NAVIGATE THROUGH THE INPUT GRID?
  });
}

function isGridFull(){
    if ($(document).find('letter-guess').val() !== "") {
      return true;
    }
}

function isLetter(event){
    if (event.keyCode >= 97 && event.keyCode <= 122 ) {
      return true;
    }
}

function rowIsFilled(){
  if ($(document).find('letter-last').val() !== "") {
    return true;
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
