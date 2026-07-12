function createSparkle(x, y){

    const sparkle = document.createElement("img");
    sparkle.src = "images/Sparkles.png";
    sparkle.className = "sparkle";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    const moveX = (Math.random() - 0.5) * 100;
    const moveY = (Math.random() - 0.5) * 100;

    sparkle.style.setProperty("--x", moveX + "px");
    sparkle.style.setProperty("--y", moveY + "px");

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    },700);
}

document.addEventListener("click", function(event){
    for(let i = 0; i < 5; i++){
        createSparkle(
            event.clientX,
            event.clientY
        );
    }
});