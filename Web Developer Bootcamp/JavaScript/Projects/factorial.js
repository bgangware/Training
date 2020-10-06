// alert("hello")

 function factorial(number) {
if (number == 0) {
    return 1;}
else
    for (var i = 1; i <= number; i++){
       total = total*i; 
       console.log (total);
        // return number;
    }
}

var total = 1;
var number = prompt("please enter number");
factorial(number)
alert(number + " is the factorial of " + total); 