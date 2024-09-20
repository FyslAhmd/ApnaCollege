let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("color changed to red");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("color changed to green");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("color changed to yellow");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("color changed to blue");
  });

// promises
function saveDB(data) {
  return new Promise((resolve, reject) => {
    let intSpeed = Math.floor(Math.random() * 10 + 1);
    if (intSpeed > 4) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });
}

let req = saveDB("Faysal Ahmed");
console.log(req);
req
  .then((result) => {
    console.log(result);
    console.log("Promise resolve. data1 saved.");
    return saveDB("Ahmed");
  })
  .then((result) => {
    console.log(result);
    console.log("data2 saved");
  })
  .catch((error) => {
    console.log(error);
    console.log("peomise rejected.");
  });