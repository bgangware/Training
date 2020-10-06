window.setTimeout(function() {

// alert("Hello");
var player1 = 0;
var player2 = 0;
var maxScore = 5;
var hitMaxScore = false;
var displayScore = document.querySelectorAll("span");
displayScore[0].innerHTML = player1;
displayScore[1].innerHTML = player2;
displayScore[2].innerHTML = maxScore;

/* var scoreText =  player1 + " to " + player2;
var maxScoreText = "Playing to: " + maxScore;
var displayMaxScore = document.querySelector("h3");
displayMaxScore.innerHTML = maxScoreText; */

// Player 1 button
var button1 = document.querySelectorAll("button");
button1[0].addEventListener("click",function() {
    console.log(player1);
    if (hitMaxScore == false) {
            updateScore1();
    }
});

// Player 2 button
var button1 = document.querySelectorAll("button");
button1[1].addEventListener("click",function() {
    console.log("Player 2");
    if (hitMaxScore == false) {
        updateScore2();
    }
});

// Reset button
var button1 = document.querySelectorAll("button");
button1[2].addEventListener("click",function() {
    console.log("Reset");
    player1 = 0;
    player2 = 0;
    displayScore[0].style.color = "black";
    displayScore[1].style.color = "black";
    hitMaxScore = false;
    updateHTML()
});

// Player 1 routine to update their score
var updateScore1 = function(){
    console.log("function executed");
    player1++;
    if (player1 == maxScore){
        hitMaxScore = true;
        displayScore[0].style.color = "red";
    }
    updateHTML()
}

// Player 2 routine to update their score
var updateScore2 = function(){
    console.log("function executed");
    player2++;
    if (player2 == maxScore){
        hitMaxScore = true;
        displayScore[1].style.color = "red";
    }
    updateHTML()
}

// Routine to update the HTML with variables
var updateHTML = function(){
    // displayScore = document.querySelectorAll("span");
    displayScore[0].innerHTML = player1;
    displayScore[1].innerHTML = player2;
    displayScore[2].innerHTML = maxScore;
}

updateMax = function(){
    maxScore = document.querySelector("Input").value;
    updateHTML()
}


}, 500);
