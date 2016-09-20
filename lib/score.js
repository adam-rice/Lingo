const $ = require('jquery');

var Score = {
  currentScore : 0,
  highScore : 0,
  // mysteryWord : '',

  initialStore: function() {
    localStorage.setItem('score', Score.currentScore);
  },

  updateScore: function(currentScore){
    currentScore++;
    return currentScore;
  },

  // updateHighScore: function(){
  //   if(this.currentScore > this.highScore){
  //     this.highScore = this.currentScore;
  //     this.updateHighScore();
  //   }
  //   this.renderScore(Score);
  // },

  renderScore: function(Score){
    var score = parseInt(Score);
    $('.game-footer').html('<article id="score"><p>Score: <span id="current-score">'+score+'</span></p></article>');
    // "Scores "+this.currentScore;
    // "Your Scores"+this.highScore;
  },

  // <article id="high-score"><p>High Score: <span id="current-high-score">${Score.highScore}</span><p></article>

  storeCurrentScore: function(newScore) {
    this.currentScore = newScore;
    localStorage.setItem('score', newScore);
  },

// storeHighScore: function(highScore){
//     localStorage.setItem('highScore',this.highScore);
//   },
//
// storeMysteryWord: function(mysteryWord){
//     localStorage.setItem('mysteryWord',this.mysteryWord);
//   },

  retrieveCurrentScore: function(){
    return localStorage.getItem('score');
  },

  //   retrieveHighScore: function(){
  //   return  localStorage.getItem('highScore');
  // },
  //
  //   retrieveMysteryWord: function(){
  //   return localStorage.getItem('mysteryWord');
  // },

  clearStorage: function(){
    localStorage.setItem('score', 0);
  },
};

module.exports = Score;
