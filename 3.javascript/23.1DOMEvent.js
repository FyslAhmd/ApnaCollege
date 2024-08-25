let btn = document.querySelector('button');
let btn2 = document.querySelector('.btn2')

btn.onclick = function() {
    console.log("Button Clicked!!!");
}


function mouseEnter() {
    console.log("Mouse Entered the Area...");
}
function named() {
    console.log("Button 2 clicked...");
}

btn.onmouseenter = mouseEnter;

btn.onmouseleave = function() {
    console.log("Mouse leave the area...");
}


btn2.addEventListener("click", mouseEnter);
btn2.addEventListener("click", named);


let head = document.querySelector("h2");
let para = document.querySelector("p");
let btn34 = document.querySelector(".btn3");

function changecol() {
    console.log(this.innerText);
    this.style.backgroundColor = "green";
}
head.addEventListener("click",changecol);
para.addEventListener("click",changecol);
btn34.addEventListener("click",changecol);


let inp = document.querySelector("input");
let btninp = document.querySelector(".btninp");

inp.addEventListener("keyup", function(event) {
    console.log("Key =",event.key);
    console.log("Code =",event.code);
    console.log("Key pressed.");
});


// form 
let form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let user = this.elements[0];
    let pass = this.elements[1];

    alert(`hii ${user.value}, ${pass.value} is your password.`);
});


