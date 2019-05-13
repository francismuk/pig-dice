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

function resetGame() {
    location.reload();
}

var add = function (a, b) {
    return parseInt(a + b);
}

function addscore(accumulator, a) {
    return accumulator + a;
}

var p1 = [];
var p2 = [];
var p1held = [];
var p2held = [];
var p2score = 0;


function myFunction() {
    var random = Math.floor((Math.random() * 6) + 1);
    var random2 = Math.floor((Math.random() * 6) + 1);
    result = add(random, random2);
    document.getElementById("demo").innerHTML = "DICE 1 : " + random;
    document.getElementById("demo2").innerHTML = "DICE 2 : " + random2;
    document.getElementById("total").innerHTML = "TOTAL : " + result;

    if ((random > 1) && (random2 > 1)) {

        p1.push(result);
        p1score = p1.reduce(addscore);


        document.getElementById("p1score").innerHTML = p1score;

    } else if ((random === 1) || (random2 === 1)) {
        $("#p2-btn").show();
        $("#p1-btn").hide();
        $("#p2").addClass("p2turn");
        $("#p-one").removeClass("p2turn");
        $("#p2-hold").show();
        $("#p1-hold").hide();
        document.getElementById("p1score").innerHTML = 0;
    }

}

function my2Function() {
    var random = Math.floor((Math.random() * 6) + 1);
    var random2 = Math.floor((Math.random() * 6) + 1);
    var result1 = add(random, random2);
    document.getElementById("demo3").innerHTML = "DICE 1 : " + random;
    document.getElementById("demo4").innerHTML = "DICE 2 : " + random2;
    document.getElementById("total2").innerHTML = "TOTAL : " + result1;

    if ((random > 1) && (random2 > 1)) {

        p2.push(result1);
        p2score = p2.reduce(addscore);
        document.getElementById("p2score").innerHTML = p2score;

    } else if ((random === 1) || (random2 === 1)) {

        $("#p1-btn").show();
        $("#p2-btn").hide();
        $("#p1").addClass("p2turn");
        $("#p2").removeClass("p2turn");
        $("#p1-hold").show();
        $("#p2-hold").hide();
        document.getElementById("p2score").innerHTML = 0;
    }
}

$(document).ready(function () {
    document.getElementById("p1-hold").addEventListener("click", function () {
        p1held.push(p1score);
        var final = p1held.reduce(addscore);
        document.getElementById("p1-held").innerHTML = final;
        $("#p1-hold").hide();
        $("#p2-btn").show();
        $("#p1-btn").hide();
        $("#p-two").addClass("p2turn");
        $("#p-one").removeClass("p2turn");
        $("#p2-hold").show();
        document.getElementById("p1score").innerHTML = 0;
        p1 = [];
        p1score = 0;
        if (final >= 100) {
            document.getElementById("p1score").innerHTML = "WINNER!!";
        }
    });
});
$(document).ready(function () {
    document.getElementById("p2-hold").addEventListener("click", function () {
        p2held.push(p2score);
        var final = p2held.reduce(addscore);
        document.getElementById("p2-held").innerHTML = final;
        $("#p2-hold").hide();
        $("#p1-btn").show();
        $("#p2-btn").hide();
        $("#p1").addClass("p2turn");
        $("#p2").removeClass("p2turn");
        $("#p1hold").show();
        document.getElementById("p2score").innerHTML = 0;
        p2 = [];
        p2score = 0;
        if (final >= 100) {
            document.getElementById("p2score").innerHTML = "WINNER!!";
        }

    });
});
