const $ = require('jquery');

var endGame = function(){
  $('#score-box').html("<div class='score'>Score:  "+localStorage.getItem('score')+"</div><div class='high-score'>High Score: "+localStorage.getItem('highScore')+"</div><div class='mystery-word'>Mystery Word: "+localStorage.getItem('mysteryWord')+"</div><a href='../lib/game.html'><button type=button id='play-again-button'>Play Again!</button></a>");
};

endGame();
