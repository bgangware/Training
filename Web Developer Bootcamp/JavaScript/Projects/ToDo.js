// alert("Hi");
/* console.log("start");
console.log("start");
console.log("start");
console.log("start");
console.log("start");
console.log("start");
console.log("start");
console.log("start");
console.log("start");
console.log("start");
console.log("start");  */

var command = " ";
var item = " ";
var todolist = [];

window.setTimeout(function() {

while (command !== "quit") {
    if (command == "new") {
        comNew();
    }
    else if (command == "list") {
        comList();
    }
    else if (command == "delete") {
        comDelete();
    }
command = prompt("What do you want to do: new, list, delete or quit");    
}

console.log("OK, YOU QUIT THE APP");
}, 500)

function comNew() {
    console.log("new"); 
    item = prompt("please enter the new to do item");
    todolist.push(item);
    console.log(item + " added to the list");   
}

function comList() {
    console.log("list");  
    console.log("**********");
    todolist.forEach (function(todo,i){
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function comDelete() {
    item = prompt("please enter the number of the item you wish to delete");
    todolist.splice(item,1);
    console.log("delete");   
}

/* while (command !== "quit") {    
    command = prompt("What do you want to do: new, list or quit");
    // console.log(command);
        if (command == "new") {
            item = prompt("please enter the new to do item");
            todolist.push(item);
            console.log(item + " added to the list");    
        }
        else if (command == "list") {
            console.log("**********");
            todolist.forEach (function(todo,i){
                console.log(i + ": " + todo);
            });
            console.log("**********");
            // console.log("list");
            // break;
        } 
        else if (command == "delete") {
            console.log("delete");
            item = prompt("please enter the number of the item you wish to delete");
            todolist.splice(item,1);
              }
    }
     */