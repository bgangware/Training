window.setTimeout(function() {
/* alert("Hello Brand");
$("h1").text("jQuery is Working");  */

// $("li").css("background","lime");

setListItemBackground();

function setListItemBackground()
{
    console.log("Working");
    var listItem = document.querySelectorAll("li");

    var i;
    for (i = 0; i < listItem.length; i++) {
        var i2 = i+2;
        if (i2%2 == 0) { 
        console.log(i, i2);
        listItem[i].style.background = "white"; 
        }
        else {
        listItem[i].style.background = "#f7f7f7"; 
        }
    }
} 

function addToDo()
{
    console.log("Working");
    
    var appText =  $("input:text").val();
    var appTextIns = "<li>" + appText + "</li>";
    $("input:text").val("")
    $( "ul" ).append( appTextIns );
}

$("#plus").click(function() {
    var x = document.querySelector("input");
        if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            ;}  
});

$('input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13' && $("input").val().length != 0) {
        addToDo();
        setListItemBackground()
        }
        
});


$("ul").on("click","li",function() {
    $(this).toggleClass("completedTodo");
    console.log("li clicked");
    
});

$("li").hover(function() {
    // $(this).toggleClass("completedTodo");
    // $(this).css("display", "inline");
    // let span=$(this).getElements("span");
    console.log("li hover");
    
});
}, 500);