// alert("hello")

function kebabToSnake(textString) {
    for (var i = 0; i <= textString.length; i++){
        textString = textString.replace('-','_');
        console.log(textString + " " + i);
        }   
    }  
        
    // alteredText[0]="$";

    
/* if (number%2 === 0) {
    return "true";}
else
    {return "false";} */





var OrgString = prompt("please enter kebob text string");
var textString = OrgString;
kebabToSnake(textString);
alert("Kebab text string is       " + OrgString +    "   Snake text string is   " + textString );