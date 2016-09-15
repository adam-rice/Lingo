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
  $(document).on('click',function(){
    $(document).find('input').css('background-color', 'purple');
    console.log('hi');
  });
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
