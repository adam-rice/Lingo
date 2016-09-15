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
      console.log('him mom')
    } else {
      event.preventDefault();
    }
    if (isGridFull() === true) {
      // var nextInput = guess
    }

    //If it does, move to next column in the table if gridIsFilled() (perhaps by simulating a tab key press)
    //If the rowIsFilled(); and a key is pressed, replace the last letter in the row with keyCode
    //On enter submit the row to the scanTron. (UI / RULES NEEDS TO INDICATE WHY ENTER)
    //The scanTran returns the results (x color in correct place, y color if wrong place, z color not in the word)
    //IS BACKSPACE OR DELETE
    //13 IS THE ENTER KEY

    //SHOULD ANYTHING HAPPEN WHEN THE ARROW KEYS ARE PRESSED?
  });
}

function isGridFull(){
    if (this.find('.letter-guess') !== "") {
      return true;
    }
}

function isLetter(event){
    if (event.keyCode >= 97 && event.keyCode <= 122 ) {
      return true;
    }
}

function rowIsFilled(){
  var row;
  if (row.length === 5){
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
