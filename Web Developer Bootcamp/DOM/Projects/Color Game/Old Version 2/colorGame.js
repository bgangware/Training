window.setTimeout(function() {
// alert("Hello");

// Intialize variables for Red, Green and Blue numbers
var redColor = Math.floor((Math.random() * 255) + 1);
var greenColor = Math.floor((Math.random() * 255) + 1);
var blueColor = Math.floor((Math.random() * 255) + 1);

var redColorGuess = 1;
var greenColorGuess = 1;
var blueColorGuess = 1;

// Initialize and load html into variables for "New Colors", Easy and Hard text selections"
var newColorsVar = document.querySelector("#newColors");
var easyVar = document.querySelector("#easy");
var hardVar = document.querySelector("#hard");

// Initialize and load html into variables for "New Colors", Easy and Hard text selections"
var colorGuess1Var = document.querySelector("#colorGuess1");
var colorGuess2Var = document.querySelector("#colorGuess2");
var colorGuess3Var = document.querySelector("#colorGuess3");
var colorGuess4Var = document.querySelector("#colorGuess4");
var colorGuess5Var = document.querySelector("#colorGuess5");
var colorGuess6Var = document.querySelector("#colorGuess6");
var colorGuessVar = document.querySelectorAll(".square");
colorGuessVar.style.background = "blue";
debugger

// Initialize other variables including total number of guesses (6 - hard, 3 - Easy)
colorGuess1Var.style.background = "pink";
var guessTotalNo = 6;
var colorToGuessIndex = 0;
var rgbVar = " ";

// console.log(redColor + " " + greenColor + " " + blueColor);
var displayRed = document.querySelector("#colorRedDisp");
displayRed.textContent = redColor;
var displayGreen = document.querySelector("#colorGreenDisp")
displayGreen.textContent = greenColor;
var displayBlue = document.querySelector("#colorBlueDisp");
displayBlue.textContent = blueColor;

var Guess1Array = [0,0,0];
var Guess2Array = [0,0,0];
var Guess3Array = [0,0,0];
var Guess4Array = [0,0,0];
var Guess5Array = [0,0,0];
var Guess6Array = [0,0,0];

console.log(Guess1Array);
console.log(Guess2Array);
console.log(Guess3Array);
console.log(Guess4Array);
console.log(Guess5Array);
console.log(Guess6Array);

/* var ColorGuessObj = {}; 
ColorGuessObj.redColor = 1; 
ColorGuessObj.greenColor = 1; 
ColorGuessObj.blueColor = 1;
for (var i=0; i<6; i++) {
    ColorGuessObj.redColor[i] = 2; 
    ColorGuessObj.greenColor[i] = 2; 
    ColorGuessObj.blueColor[i] = 2; 
};
console.log(ColorGuessObj);
 */

// Event listener for "new colors" text selection - starts new game"
newColorsVar.addEventListener("click",function() {
console.log("New Colors -- has been clicked");
startOver ()

}) 

// Event listener for "Easy" text selection"
easyVar.addEventListener("click",function() {
console.log("Easy -- has been clicked");
}) 

// Event listener for "Hard" text selection"
hardVar.addEventListener("click",function() {
console.log("Hard -- has been clicked");
}) 

// Event listeners for the 6 color answers"
colorGuess1Var.addEventListener("click",function() {
console.log("guess 1 -- has been clicked " + guessTotalNo);
}) 
colorGuess2Var.addEventListener("click",function() {
console.log("guess 2 -- has been clicked " + guessTotalNo);
}) 
colorGuess3Var.addEventListener("click",function() {
console.log("guess 3 -- has been clicked " + guessTotalNo);
}) 
colorGuess4Var.addEventListener("click",function() {
console.log("guess 4 -- has been clicked " + guessTotalNo);
}) 
colorGuess5Var.addEventListener("click",function() {
console.log("guess 5 -- has been clicked " + guessTotalNo);
}) 
colorGuess6Var.addEventListener("click",function() {
console.log("guess 6 -- has been clicked " + guessTotalNo);
}) 


//starts new game
var startOver = function() {
    chooseColorGuesses ()
    chooseColorToGuess ()
    displayColorToGuess ()
    displayColorGuesses () 
}


// This routine choses 6 or 3 random colors and loads them into an array
var chooseColorGuesses = function() 
    { 
    for (var i=0; i<3; i++) {
        Guess4Array[i]=255
        Guess5Array[i]=255
        Guess6Array[i]=255
        }
    for (var i=0; i<3; i++) {    
        Guess1Array[i]= Math.floor((Math.random() * 255) + 1);   
        Guess2Array[i]= Math.floor((Math.random() * 255) + 1);   
        Guess3Array[i]= Math.floor((Math.random() * 255) + 1);   
        }
    if (guessTotalNo == 6) {
        for (var i=0; i<3; i++) {    
            Guess4Array[i]= Math.floor((Math.random() * 255) + 1);   
            Guess5Array[i]= Math.floor((Math.random() * 255) + 1);   
            Guess6Array[i]= Math.floor((Math.random() * 255) + 1);  
            }
        }
    console.log(Guess1Array);
    console.log(Guess2Array);
    console.log(Guess3Array);
    console.log(Guess4Array);
    console.log(Guess5Array);
    console.log(Guess6Array);
    console.log(guessTotalNo);
}

// This routine choses a random answer
var chooseColorToGuess = function () {
    if (guessTotalNo == 6) {
        colorToGuessIndex = Math.floor((Math.random() * 6));
        console.log(colorToGuessIndex);
    }

    else {
        colorToGuessIndex = Math.floor((Math.random() * 3));
        console.log(colorToGuessIndex);
    }    

    if (colorToGuessIndex == 0){
        redColor = Guess1Array[0];
        greenColor = Guess1Array[1];
        blueColor = Guess1Array[2];
        }
        else if (colorToGuessIndex == 1){
            redColor = Guess2Array[0];
            greenColor = Guess2Array[1];
            blueColor = Guess2Array[2];
            }
            else if (colorToGuessIndex == 2){
                redColor = Guess3Array[0];
                greenColor = Guess3Array[1];
                blueColor = Guess3Array[2];
                }
                else if (colorToGuessIndex == 3){
                    redColor = Guess4Array[0];
                    greenColor = Guess4Array[1];
                    blueColor = Guess4Array[2];
                    }
                    else if (colorToGuessIndex == 4){
                        redColor = Guess5Array[0];
                        greenColor = Guess5Array[1];
                        blueColor = Guess5Array[2];
                        }
                    else {
                        redColor = Guess6Array[0];
                        greenColor = Guess6Array[1];
                        blueColor = Guess6Array[2];
                        }
        console.log(redColor);
        console.log(greenColor);
        console.log(blueColor);
    
        
}

//display the three color scales values in the header 
var displayColorToGuess = function() {
    displayRed.textContent = redColor;
    displayGreen.textContent = greenColor;
    displayBlue.textContent = blueColor;   
}

var displayColorGuesses = function() {
    getColorFromArrays (3,5,7,0); 
    moveColorToHTML () 
}

var getColorFromArrays = function(r, g, b, i) {
    redColorGuess = r;
    greenColorGuess = g;
    blueColorGuess = b;
    rgbVar = "pink";
    colorGuessVar.style.background = "pink";
    console.log(redColorGuess,greenColorGuess,blueColorGuess,i);
}

var moveColorToHTML = function() {
    colorGuess2Var.style.background = "purple";
}

}, 500);