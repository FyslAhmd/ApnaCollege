// for each function
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (e) {
  console.log(e);
});
console.log("\n");
// another way
let print = function (e) {
  console.log(e);
};
arr.forEach(print);
console.log("\n");
// using arrow function
arr.forEach((e) => {
  console.log(e);
});

// map function
let num = [1, 2, 3, 4, 5];
let sqr = num.map((e) => {
  return e * e;
});
console.log("\n");
sqr.forEach((e) => {
  console.log(e);
});

// filter function
let filt = num.filter((e) => {
  return e % 2 == 0;
});
console.log("\n");
filt.forEach((e) => {
  console.log(e);
});

// every function
let evenNum = [2, 4, 6, 8, 10];
let check = evenNum.every((e) => {
  return e % 2 == 0;
});
console.log("\n");
console.log(check);

// reduce method
console.log("\n");
let num2 = [1, 2, 3, 4];
let finalVal = num2.reduce((ans, e) => {
  console.log(ans);
  return ans + e;
});
console.log(finalVal);

// find maximum
let num3 = [1, 5, 8, 3, 5, 3];
let max = num3.reduce((ans, e) => {
  if (ans < e) {
    return e;
  } else {
    return ans;
  }
});
console.log("\n", max);
