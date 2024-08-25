let oldImages = document.getElementsByClassName("oldImg");

for(let i=0; i< oldImages.length; i++) {
    oldImages[i].src = "Image/card4img.jpeg";
    console.log(`Source of Image No. ${i} is changed`);
}

heading = document.querySelector("h1");
heading.innerHTML = `<u>${heading.innerText}</u>`;

let img = document.querySelector(".images");
img.getAttribute('id');
img.setAttribute('id','imagess');
console.log(img.getAttribute('id'));

let head = document.querySelector('h1');
head.style.color = 'green';
head.style.backgroundColor = 'yellow';

let anchor = document.querySelectorAll('.box a');
for(link of anchor) {
    link.style.color = 'green';
}

let newP = document.createElement('p');
newP.innerText = "Hii, i'm new paragraph";
let box = document.querySelector(".box");
box.appendChild(newP);
newP.remove();