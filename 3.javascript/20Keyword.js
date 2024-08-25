const student = {
    name: "Faysal",
    age: 23,
    ban : 95,
    eng : 98,
    math : 100,
    getAvg() {
        let avg = (this.ban + this.eng + this.math) / 3;
        console.log(`${this.name} got average marks of ${avg}`);
    }
}
student.getAvg();


console.log("Hello")
console.log("Hello")
try {
    console.log(a)
}
catch(e) {
    console.log("Caught an error..")
    console.log(e)
}
console.log("Hello")
console.log("Hello")

// arrow functions
const sum = (a,b) => {
    console.log(a+b);
}
sum(5,6)

// set timeout 
console.log("Hi! There")
setTimeout(()=> {
    console.log("Hello");
},5000);
console.log("Hiiii")


// set interval
// setInterval(()=> {
//     console.log("Hulu Lulu");
// },2000);