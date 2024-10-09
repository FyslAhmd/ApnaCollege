let jsonRes = '{"fact":"My name is faysal ahmed and im a web developer.","length":70}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "Faysal Ahmed",
    marks: 95,
};

let validRev = JSON.stringify(student);
console.log(validRev);

// api call 
let url = "https://catfact.ninja/fact";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.fact);
        return fetch(url);
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.fact);
    })
    .catch((error) => {
        console.log(error);
    });

    console.log("Thank You...");


async function getFacts() {
    try {
        let result = await fetch(url);
        let data = await result.json();
        console.log(data.fact);

        let result2 = await fetch(url);
        let data2 = await result2.json();
        console.log(data2.fact);
    } catch(e) {
        console.log(e);
    }

    console.log("Thank You..");
}

getFacts();