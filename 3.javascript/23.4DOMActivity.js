let btn = document.querySelector("button");
let head = document.querySelector("h2");

btn.addEventListener("click", function() {
    let col = randomColor();
    head.innerText = col;
    
    let div = document.querySelector("#box");
    div.style.backgroundColor = col;
});

function randomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}