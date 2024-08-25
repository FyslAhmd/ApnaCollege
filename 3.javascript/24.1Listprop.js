let div = document.querySelector(".div");
let ul = document.querySelector(".ul");
let lis = document.querySelectorAll(".li");

div.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Div clicked...");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul clicked...");
});

for (li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li clicked...");
  });
}


let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let ull = document.querySelector(".ull");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    let del = document.createElement("button");

    item.innerText = inp.value;
    del.innerText = "Delete";
    del.classList.add("delete");
    ull.appendChild(item);
    item.appendChild(del);
    inp.value = "";
});

ull.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
        console.log("delete");
    }
});