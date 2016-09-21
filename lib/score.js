const $ = require('jquery');

var Score = {
  currentScore : this.currentScore || 0,
  highScore : this.highScore || 0,
  mysteryWord : this.mysteryWord || '',

  initialStore: function() {
    localStorage.setItem('score', Score.currentScore);
    localStorage.setItem('highScore', Score.highScore);
    localStorage.setItem('mysteryWord', Score.mysteryWord);
  },

  updateScore: function(currentScore){
    currentScore++;
    return currentScore;
  },

  updateHighScore: function(newScore){
    var highScore = this.highScore;
    if(newScore > highScore){
      highScore = newScore;
      return highScore;
    }
    return highScore;
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
