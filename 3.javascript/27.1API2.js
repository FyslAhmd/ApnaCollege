let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let result = await axios.get(url);
        return result.data.fact;
    } catch(e) {
        return "No Facts Found."
    }
}

// interact with HTML
let btn = document.querySelector('#catbtn');
let para = document.querySelector('#fact');

btn.addEventListener("click",async () => {
    let facts = await getFacts();
    para.innerText = facts;
});




let url2 = "https://dog.ceo/api/breeds/image/random"

async function getImg() {
    try {
        let result = await axios.get(url2);
        return result.data.message;
    } catch(e) {
        return "No Image Found."
    }
}

let btn2 = document.querySelector('#dogbtn');
let img2 = document.querySelector('#dog');

btn2.addEventListener("click",async () => {
    let dimg = await getImg();
    img2.setAttribute("src",dimg);
});


let url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        let config = {headers: {Accept : "application/json"}};
        let result = await axios.get(url3,config);

        console.log(result.data.joke);
    } catch(err) {
        console.log(err);
    }
}
getJokes();


let url4 = "http://universities.hipolabs.com/search?name=";
async function getUni(country) {
    try {
        let result = await axios.get(url4 + country);
        return result.data;
    } catch(err) {
        return [];
    }
}

let btn4 = document.querySelector('#uni');
btn4.addEventListener("click",async ()=> {
    let country = document.querySelector('input').value;
    let university =await getUni(country);
    show(university);
})

function show(uni) {
    let list = document.querySelector('#uniList');
    list.innerText = "";
    for(uniName of uni) {
        let li = document.createElement("li");
        li.innerText = uniName.name;
        list.appendChild(li);
    }
}