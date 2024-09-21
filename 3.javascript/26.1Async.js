async function hello() {
  throw "Error found.";
  return "Hello!!";
}
hello()
  .then((res) => {
    console.log("Promise success");
    console.log(res);
  })
  .catch((res) => {
    console.log("Promise rejected.");
    console.log(res);
  });

let demo = async () => {
  return 5;
};

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demoF() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}



let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
        let rand = Math.floor(Math.random()*10)+1;
        if(rand>5) {
            reject("Error found");
        }
      h1.style.color = color;
      console.log(`color change to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function colChange() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("blue", 1000);
    }
    catch(err) {
        console.log(err);
    }

    let numb = 5;
    console.log("Number is",numb);
}