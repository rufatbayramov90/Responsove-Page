let menuBtn = document.querySelector("#menuBtn");
let navbar = document.querySelector(".nav");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function(){
    if(navbar.style.right == "-200px"){
        navbar.style.right = "0";
        menu.src = "images/closeicon.png";
    }else{
        navbar.style.right = "-200px";
        menu.src = "images/hmicon.png";
    }
})