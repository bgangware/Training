alert ("Hi")

// sample code no auguments
function dosomething () {
    console.log ("Hello World");
    }
dosomething ();
dosomething ();
dosomething ();
dosomething ();

// sample code one augument
function  square(num) {
    console.log (num * num);
}

var num = prompt ("please Enter A Number To be Squared")
square (num)

// sample code two auguments
function  area(width,length) {
    console.log (width * length);
}

var width = prompt ("please Enter Width")
var length = prompt ("please Enter Length")
area(width,length)

// sample code one augument and a reutrn value
function  squarer(num) {
     return num * num
  
   }

var num = prompt ("please Enter A Number To be Squared")
squarer (num)
console.log ("The Square of the number is " + squarer(num));