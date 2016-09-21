const $ = require('jquery');

var Score = {
  currentScore : 0,
  highScore : 0,

  initialCurrentStore: function() {
    localStorage.setItem('score', Score.currentScore);
  },

  initialStore: function() {
    localStorage.setItem('highScore', Score.highScore);
  },

  updateScore: function(currentScore){
    currentScore++;
    return currentScore;
  },

  updateHighScore: function(newScore){
    var highScore = newScore;
    if(newScore > highScore){
      highScore = newScore;
      return highScore;
    }
  },

  renderScore: function(Score, highScore){
    var score = parseInt(Score);
    var bestScore = parseInt(highScore);
    $('.game-footer').html('<article id="score"><p>Score: <span id="current-score">'+score+'</span></p></article><article id=high-score><p>High Score: <span id="current-high-score">'+bestScore+'</span><p></article>');
  },


  storeCurrentScore: function(newScore) {
    this.currentScore = newScore;
    localStorage.setItem('score', newScore);
  },

  storeHighScore: function(bestScore){
    this.highScore = bestScore;
    localStorage.setItem('highScore', bestScore);
  },

  retrieveCurrentScore: function(){
    return localStorage.getItem('score');
  },

  retrieveHighScore: function(){
    return  localStorage.getItem('highScore');
  },

  clearStorage: function(){
    debugger;
    localStorage.setItem('score', 0);
  },
};

module.exports = Score;
