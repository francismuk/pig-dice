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
var i;

iRandomNumber = Math.ceil(Math.random()*6);

document.result(iRandomNumber);
