let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "purple"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (start == false) {
    start = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randCol = btns[randIdx];
  let randBtn = document.querySelector(`.${randCol}`);
  gameFlash(randBtn);
  gameSeq.push(randCol);
  console.log(gameSeq);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userbtn = btn.getAttribute("id");
  userSeq.push(userbtn);
  checkAns(userSeq.length - 1);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${
      level - 1
    }</b><br>Press any key to start...`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    gameReset();
  }
}

function gameReset() {
  gameSeq = [];
  userSeq = [];
  start = false;
  level = 0;
}
