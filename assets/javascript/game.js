$(document).ready(function() {

    var randomNumber = Math.floor((Math.random() * 120) + 1);
    console.log(randomNumber);
    $("#numberToGuess").text(randomNumber);

    var gemNumber = function() {
        return Math.floor((Math.random() * 12) + 1);
    }

    var redGem = gemNumber();
    var blueGem = gemNumber();
    var yellowGem = gemNumber();
    var greenGem = gemNumber();

    var totalWins = 0;
    var totalLosses = 0;
    var totalScore = 0;

    var resetGame = function() {
       	randomNumber = Math.floor((Math.random() * 120) + 1);
       	$("#numberToGuess").text(randomNumber);
        redGem = gemNumber();
        blueGem = gemNumber();
        yellowGem = gemNumber();
        greenGem = gemNumber();
        totalScore = 0;
        $("#totalScore").text(totalScore);
    }

var checkWinLoss = function() {
    if (totalScore === randomNumber) {
        totalWins++;
        console.log("win");
        $("#totalWin").text(totalWins);
        resetGame();
    } else if (totalScore < randomNumber) {
    	console.log("continue");
    } else {
        totalLosses++;
        console.log("loss");
        $("#totalLosses").text(totalLosses);
        resetGame();
    }
}

$("#redGem").on("click", function() {
    totalScore = totalScore + redGem;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    checkWinLoss();
});
 $("#blueGem").on("click", function() {
    totalScore = totalScore + blueGem;
    $("#totalScore").text(totalScore);
    checkWinLoss();
});
 $("#yellowGem").on("click", function() {
    totalScore = totalScore + yellowGem;
    $("#totalScore").text(totalScore);
    checkWinLoss();
});
 $("#greenGem").on("click", function() {
    totalScore = totalScore + greenGem;
    $("#totalScore").text(totalScore);
    checkWinLoss();
});



});