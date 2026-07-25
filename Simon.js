// ===== Variables =====
let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];
let started = false;
let level = 0;
let highestRecord = 0;

// ===== DOM Elements =====
let h3 = document.querySelector("h3");
let liveScore = document.querySelector(".live span");
let highScore = document.querySelector(".high span");

// ===== Start Game =====
document.addEventListener("keypress", function (event) {
    if (started == false && event.key == "Enter") {
        started = true;
        levelchg();
    }
});

document.addEventListener("click", function () {
    if (started == false) {
        started = true;
        levelchg();
    }
});

// ===== Button Flash Effects =====
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

// ===== Level Change =====
function levelchg() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    liveScore.innerText = level;

    let randInx = Math.floor(Math.random() * 4);
    let ranColor = btns[randInx];
    let ranBtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);

    for (let i = 0; i < gameSeq.length; i++) {
        setTimeout(function () {
            let currentBtn = document.querySelector(`.${gameSeq[i]}`);
            btnFlash(currentBtn);
        }, i * 600);
    }
}

// ===== Check Answer =====
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelchg, 1000);
        }
    } else {
        if (level > highestRecord) {
            highestRecord = level;
            highScore.innerText = highestRecord;
        }

        h3.innerHTML = `Game Over! Your score was <b>${level}</b>. <br> Press Enter to restart.`;

        saveData();

        if (navigator.vibrate) {
            navigator.vibrate(250);
        }

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

// ===== Button Click =====
function btnPress() {
    if (started == false) return;

    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

// ===== Reset Game =====
function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
    liveScore.innerText = 0;
}

// ===== Local Storage =====
function saveData() {
    localStorage.setItem("data", highScore.innerText);
}

function showData() {
    highScore.innerText = localStorage.getItem("data");
}

showData();