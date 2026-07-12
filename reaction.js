const instructionModal = new bootstrap.Modal(document.getElementById("instructionModal"));

const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));

const startButton = document.getElementById("startButton");

const gameScreen = document.getElementById("gameScreen");

const statusText = document.getElementById("statusText");

const reactionTime = document.getElementById("reactionTime");

const reactionRating = document.getElementById("reactionRating");

let startTime;
let canClick = false;

instructionModal.show();

startButton.addEventListener("click", startGame);

function startGame(){
    canClick = false;
    gameScreen.style.background = "#dc3545";
    statusText.textContent = "WAIT...";
    const delay = Math.random() * 5000 + 2000;

    setTimeout(() => {
        gameScreen.style.background = "#198754";
        statusText.textContent = "CLICK!";
        startTime = Date.now();
        canClick = true;
    }, delay);
}

gameScreen.addEventListener("click", () => {
    if(!canClick){
        alert("Too early! Try again.");
        location.reload();
        return;
    }

    const endTime = Date.now();

    const time = endTime - startTime;

    reactionTime.textContent =
        time + " ms";

    if(time < 200){
        reactionRating.textContent =
        "🔥🔥🔥 Incredible!";
    }

    else if(time < 300){
        reactionRating.textContent =
        "🔥🔥 Great!";
    }

    else if(time < 450){
        reactionRating.textContent =
        "🔥 Good";
    }

    else{
        reactionRating.textContent =
        "💪 Keep Practicing!";

    }
    resultModal.show();
});