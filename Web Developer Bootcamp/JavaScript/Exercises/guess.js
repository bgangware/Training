
var NumToGuess = 8;

var guess = prompt ("What is your guess");

if (guess < NumToGuess) 
    {console.log ("Your guess is too low")} 
    else if (guess > NumToGuess) 
             {console.log ("Your guess is too High")}
         else 
                {console.log ("You guessed it")}

