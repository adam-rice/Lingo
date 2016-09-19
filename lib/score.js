var Score = {
  currentScore : 0,
  highScore : 0,
  mysteryWord : '',

  updateScore: function(scoreUp){
    this.currentScore = scoreUp;
    this.renderScore();
  },

  updateHighScore: function(){
    if(this.currentScore > this.highScore){
      this.highScore = this.currentScore;
      this.updateHighScore();
    }
    this.renderScore();
  },

  renderScore: function(){
    //displays score on page
    // "Scores "+this.currentScore;
    // "Your Scores"+this.highScore;
  },

  storeScore: function(){
    localStorage.setItem('score', this.currentScore);
    localStorage.setItem('high-score',this.highScore);
    localStorage.setItem('mysery-word',this.mysteryWord);
  },

  retrieveScore: function(){
    this.currentScore = localStorage.getItem('score');
    this.highScore = localStorage.getItem('highScore');
    this.myseryWord = localStorage.getItem('myseryWord');
  },

  clearStorage: function(){
    //delete mystery word and current score on play again button or page refresh
  },
};

module.exports = Score;
