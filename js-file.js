/* button functionality */
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click",() => console.log(playRound("rock",computerPlay())));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click",() => console.log(playRound("paper",computerPlay())));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click",() => console.log(playRound("scissors",computerPlay())));

/* button animation */
const btns = document.querySelectorAll("button");

btns.forEach(btns => btns.addEventListener("click", () => btns.classList.add("clicked")));

function removeTransition(e){
    if (e.propertyName !== "transform") return;
    this.classList.remove("clicked");
}

btns.forEach(btns => btns.addEventListener("transitionend",removeTransition));