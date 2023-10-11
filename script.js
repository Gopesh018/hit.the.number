
const gsBottom = document.querySelector('.gs-bottom');
const scoreDisplay = document.getElementById('score-display');
const hitDisplay = document.getElementById('hit-display');
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const startScreen = document.querySelector('.start-screen');
const endScreen = document.querySelector('.end-screen');
const endBtn = document.querySelector('#end-btn');
const scrDisplay = document.querySelector('#scr-display');
let hitNum = '';

startBtn.addEventListener('click', () => {
    startScreen.style.display = "none";
    timer();
});

let makeBubble = () => {
    let bubble = "";
    for (let index = 1; index <= 138; index++) {
        let randomNum = Math.floor(Math.random() * 10);
        bubble += `<div class = "bubble flex-center">${randomNum}</div>`
    }
    gsBottom.innerHTML = bubble;

}

let hit = () => {
    hitNum = Math.floor(Math.random() * 10);
    hitDisplay.textContent = hitNum;
}

let timerVal = 60;
let timer = () => {
    let timerInt = setInterval(function () {
        if (timerVal > 0) {
            timerVal--
            timerDisplay.textContent = timerVal;
        } else if (timerVal >= 0) {
            clearInterval(timerInt);
            hitDisplay.textContent = 0;
            gsBottom.innerHTML = "";
            endScreen.classList.remove('dis-none');
        }
    }, 1000);
}


let score = 0;
let scoreChange = () => {
    score += 10;
    scoreDisplay.textContent = score;
    scrDisplay.textContent = score;
}

gsBottom.addEventListener('click', (detail) => {
    let tarNum = Number(detail.target.textContent);
    if (tarNum === hitNum) {
        scoreChange();
        makeBubble();
        hit();
    }
});

endBtn.addEventListener('click', () => {
    window.location.reload();
});

makeBubble();
hit();