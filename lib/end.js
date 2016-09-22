const $ = require('jquery');
const Score = require('../lib/score');

var endGame = function(){
  $('#score-box').html("<div class='score'>Score:<br>  "+localStorage.getItem('score')+"</div><div class='high-score'>High Score:<br> "+localStorage.getItem('highScore')+"</div><div class='mystery-info'>Mystery Word:<br> "+localStorage.getItem('mysteryWord')+"</div><a href='/lib/game.html'><button type=button id='play-again-button'>Play Again!</button></a>");
};

endGame();

$('#play-again-button').on('click', function(){
  Score.clearStorage();
});
$('#start-button').on('click', function(){
  Score.clearStorage();
});
