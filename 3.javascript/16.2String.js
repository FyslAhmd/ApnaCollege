let password = prompt("Enter your password:");
console.log(password.trim());
let newpass = password.trim();
console.log(`New password is: ${newpass}`);

let name = "Faysal Ahmed";
let name1 = name.toUpperCase();
console.log(name1);

let name2 = name.toLowerCase();
console.log(name2);

let msg = "I Love You"
let ind1 = msg.indexOf("Love")
console.log(ind1)

let ind2 = msg.indexOf("Y")
console.log(ind2)

let chain = "     Faysal Ahmed      "
let newchain = chain.trim().toUpperCase()
console.log(newchain)

let firstName = "Faysal Ahmed"
let slc1 = firstName.slice(2,6)
console.log(slc1)
let slc2 = firstName.slice(5,100)
console.log(slc2)
let slc3 = firstName.slice(6)
console.log(slc3)
let slc4 = firstName.slice(-3)
console.log(slc4)

let rep1 = firstName.replace("Fay","Ahm")
console.log(rep1)

let rep2 = firstName.repeat(3)
console.log(rep2)