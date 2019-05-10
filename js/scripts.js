$(document).ready(function() {
  $(".ruleshidden, .rulesshowing").click(function() {
    $(".rulesshowing").toggle();
    $(".ruleshidden").toggle();
  });
  $(".htphidden, .htpshowing").click(function () {
    $(".htpshowing").toggle();
    $(".htphidden").toggle();
  });
  $(".objhidden, .objshowing").click(function () {
    $(".objshowing").toggle();
    $(".objhidden").toggle();
  });
});

var iRandomNumber;
var iRollDice;
var scores;
var roundScore;
var activePlayer;
var gamePlaying;

function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
}








iRandomNumber = Math.ceil(Math.random()*6);

document.result(iRandomNumber);
