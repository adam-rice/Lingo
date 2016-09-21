const $ = require('jquery');

$('.score').html(localStorage.getItem('score'));
$('.high-score').html(localStorage.getIteam('highScore'));
$('.mystery-word').html(localStorage.getIteam('mysteryWord'));
