
var age = prompt ("What is your age")

if (age < 0) 
    {console.log ("Invalid age please reenter")} 
    else if (age < 18) 
        {console.log ("Sorry you are to young to enter")}
        else if (age >= 18 && age < 21) 
            {console.log ("Please enter but do not drink")}
            else 
            {console.log ("Please enter and enjoy yourself")}

if (age == 21) 
    {console.log ("Happy Birthday")} 

if (age%2 == 1)
    {console.log ("Your birthday is odd")} 

if (age == 4 || age == 9 || age == 16 || age == 25 || age == 36 || age == 49 || age == 64 || age == 81 || age == 100 || age == 121)
    {console.log ("perfect square")} 