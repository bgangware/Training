window.setTimeout(function() {

    
// alert("Hello");
var a = 20;
var b = 20;
var c = 200;
//var test1 = "rgb(20, 20, 200)"
var test1 = 'rgb(' + a + ',' + b + ',' + c + ')'
console.log(test1);
var testNum1 = 111;
var testNum2 = 999;
var H1var = document.querySelectorAll("span");
H1var[0].style.color = "red";
H1var[0].innerHTML = testNum1;

H1var[1].style.color = test1;
//H1var[1].style.color = "rgb(200, 200, 200)";
//H1var[1].style.color = "rgb(a, b, c)";
H1var[1].innerHTML = testNum2; 

var testqa = document.querySelectorAll(".selall");
testqa.style.backgroudColor = "blue";

/* var funcVar1 = 1;
var funcVar2 = 2;
var funcVar3 = 3;
var funcVar4 = 4;

var function1 = function(i) {
    console.log("Working");
    console.log(funcVar1, funcVar2);
    funcVar3 = funcVar1 + funcVar2 + i;
}

function1 (funcVar4)
console.log(funcVar1, funcVar2, funcVar3); */

/* Spanvar = document.querySelector("#span2");
Spanvar.style.color = "red";

Spanvar.addEventListener("click",function() {
    console.log("New Colors -- has been clicked");
    }) 

*/
/* var colorGuessArray = [];

var ColorGuessObj = {}; 
ColorGuessObj.redColor = 1; 
ColorGuessObj.greenColor = 1; 
ColorGuessObj.blueColor = 1;

colorGuessArray.push(ColorGuessObj);
console.log(colorGuessArray);

ColorGuessObj.redColor = 2; 
ColorGuessObj.greenColor = 2; 
ColorGuessObj.blueColor = 2;

colorGuessArray.push(ColorGuessObj);

/* for (var i=0; i<6; i++) {
    ColorGuessObj.redColor[i] = 2; 
    ColorGuessObj.greenColor[i] = 2; 
    ColorGuessObj.blueColor[i] = 2; 
}; 

console.log(ColorGuessObj);

console.log(colorGuessArray); */


/* var a = 200;
var b = 200;
var c = 200; */

}, 500); 