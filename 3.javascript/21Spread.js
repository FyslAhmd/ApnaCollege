// spread 
let num = [1,2,6,3,9,11,1,5,3,8,10];
console.log(...num);

console.log(Math.min(...num));
console.log(Math.max(...num));
console.log(..."Faysal Ahmad");

let newNum = [...num];
console.log(newNum);

let name = [..."Faysal Ahmed"];
console.log(name);


// Rest 
console.log("\n");
function sum(...args) {
    return args.reduce((ans,e) => ans+e);
}
console.log(sum(1,2,3,4,5));

function min(...args) {
    return args.reduce((min,e) => {
        if(min>e) {
            return e;
        }
        else {
            return min;
        }
    });
}
console.log(min(1,6,4,9,3,6,11,9,4,-5,11,15,6));

// destructuring 
const student = {
    name: "Faysal Ahmed",
    age: 23,
    dept: "CSE",
    sub: ["Math","ENG","BNS","ALGO"],
    username: "faysal4699",
    password: "Ahmed@761"
}

let {username: user, password} = student;
console.log(user);
console.log(password);