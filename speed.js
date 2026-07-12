const instructionModal = new bootstrap.Modal(document.getElementById("instructionModal"));

const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));

const startButton = document.getElementById("startButton");

const gameScreen = document.getElementById("gameScreen");

const timerText = document.getElementById("timer");

const clickCounter = document.getElementById("clickCounter");

const totalClicks = document.getElementById("totalClicks");

const cpsText = document.getElementById("cps");

const rankText = document.getElementById("rank");

let clicks = 0;
let timeLeft = 30;
let gameRunning = false;

instructionModal.show();

startButton.addEventListener("click", startGame);

function startGame(){
    gameRunning = true;

    const timer = setInterval(() => {
        timeLeft--;

        timerText.textContent = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timer);
            gameRunning = false;
            showResults();
        }
    },1000);
}

gameScreen.addEventListener("click", () => {
    if(!gameRunning) return;
    clicks++;
    clickCounter.textContent = "Clicks: " + clicks;
});

function showResults(){
    const cps = (clicks/30).toFixed(2);

    totalClicks.textContent = clicks;

    cpsText.textContent = cps;

    if(cps >= 9){
        rankText.textContent =
        "🏆 Elite";
    }

    else if(cps >= 7){
        rankText.textContent =
        "🥇 Excellent";
    }

    else if(cps >= 5){
        rankText.textContent =
        "🥈 Great";
    }

    else if(cps >= 3){
        rankText.textContent =
        "🥉 Good";
    }

    else{
        rankText.textContent =
        "💪 Keep Practicing!";
    }
    resultModal.show();
}