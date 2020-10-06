alert("Hello");

var movieDB = [{
    name: "Frozen",
    rating: 4.5,
    seen: false,
},{
    name: "In Burges",
    rating: 5,
    seen: true,
},{
    name: "Mad Max Fury Road",
    rating: 5,
    seen: true,
},{
    name: "Les Miseraables",
    rating: 3.5,
    seen: false,
}];
// console.log("movie" + movieDB.name);
movieDB.forEach(function(movie)
{   
    // debugger
    console.log(formatLine(movie));
})
console.log(movieDB[3].name + "   " + movieDB[3].rating);



function formatLine (movie) {
var result = "You have ";
if(movie.seen) {
    result += "watched ";}
else 
    {result += "not seen ";}
result += "\"" + movie.name + "\" - " + movie.rating + " stars";
return result;
}