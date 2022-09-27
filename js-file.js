const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click",() => console.log(playRound("rock",computerPlay())));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click",() => console.log(playRound("paper",computerPlay())));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click",() => console.log(playRound("scissors",computerPlay())));


scissorsBtn.setAttribute("name","cucumber");

scissorsBtn.addEventListener("click",() => scissorsBtn.setAttribute("name","zuccini"));

const content = scissorsBtn.getAttribute("name");




const body = document.querySelector("body");
const test = document.querySelector(".buttonContainer")
const score = document.createElement("div");
score.classList.add("score");
score.textContent = "test";
body.insertBefore(score,test);
test.append(content);
