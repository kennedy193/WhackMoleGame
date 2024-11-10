const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole() {
    const h = Math.floor(Math.random() * holes.length);
    const hole = holes[h];

    if (hole === lastHole) {
        console.log('That’s the same hole, picking a new one...');
        return randomHole();
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(500, 1000);
    const hole = randomHole();
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 10000);
    score = 0;
}
function bonk(e){
//checking for fake click
if(!e.isTrusted) return;//cheater
score ++;
scoreBoard.textContent = score;
this.classList.remove('up');
}
moles.forEach(moles=>moles.addEventListener('click',bonk));