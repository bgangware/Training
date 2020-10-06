// alert("Hello");
var progArray = [20,40,60,80,100,120];
var item = 0;
var tf = "true";
var counttotal = 0;
var max = 0;

console.log("    ***** Print Reverse Function *****");
printReverse(progArray);
console.log("    ***** End *****");
console.log(" ");
console.log(" ");

console.log("    ***** Is Uniform Function *****");
isUniform(progArray);
console.log("uniform result is " + tf);
console.log("    ***** End *****");
console.log(" ");
console.log(" ");

console.log("    ***** Sum Array Function *****");
sumArray(progArray);
console.log("the sum of the items is " + counttotal);
console.log("    ***** End *****");
console.log(" ");
console.log(" ");

console.log("    ***** Maximum Value Function *****");
maxValue(progArray);
console.log(" The maximum value in the array is " + max);
console.log("    ***** End *****");
console.log(" ");
console.log(" ");

function printReverse(arr) {
    item = arr.length;
    console.log(arr,item);
    for (item = arr.length-1; item >= 0; item--) {
        console.log(arr[item]);
    }
}

function isUniform(arr) {
    tf = "true";
    var compitem=arr[0];
    console.log("compitem " + arr[0])
    arr.forEach(function(i) {
        console.log(i);
        if (compitem !== i)  {
            tf = "false";
        };
    })
  };    
  

  function sumArray(arr) {
      console.log("Sum Array");
      arr.forEach(function(i) {
        console.log(i);
        counttotal = counttotal + i;
        });
    };

    function maxValue(arr) {
        console.log("max value");
        arr.forEach(function(i) {
          console.log(i);
          if (i > max)  {
            max = i;}
          });
      };   