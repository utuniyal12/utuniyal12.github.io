var enterButton = document.getElementsByClassName("intro")[0];
var intro = document.getElementsByClassName("intro")[0];
var main = document.getElementsByClassName("main")[0];




enterButton.addEventListener("click", function(){
    intro.className+=" hidden"
    main.className += "reveal"
    main.className = main.className.replace("hidden"," ")
})



