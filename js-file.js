/* Gameplay Functions */
function computerPlay(){
    const compChoice = ["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);

    return compChoice[random];
}

function playRound(playerSelection,computerSelection){

    if(playerSelection === computerSelection){
        return "Tie";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){ 
        return "Player wins!";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "Player wins!";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "Player wins!";
    }
    else{
        return "Computer wins!";
    }
};

function changeScore(winner){
    if (winner === "Player wins!"){
        playerWins ++;
    }
    else if (winner === "Computer wins!"){
        compWins ++;
    }
    roundResult = winner;

    checkForWinner(playerWins,compWins);
}

function checkForWinner(score1,score2){

    if (score1 === 3){

        alert("Player Wins The Game!");

        resetGame();
    }
    else if (score2 ===3){
        alert("Computer Wins The Game");

        resetGame();
    }
}

function resetGame(){
    compWins = 0;
    playerWins = 0;
}

function playGame(roundResult){

    changeScore(roundResult);

    playerDisp.innerHTML = playerWins;
    compDisp.innerHTML = compWins;
    roundDisp.innerHTML = roundResult;

}

/* Display Variables */
let roundResult;
let compWins = 0;
let playerWins = 0;
const playerDisp = document.getElementById("playerDisplay");
const compDisp = document.getElementById("computerDisplay");
const roundDisp = document.getElementById("roundDisplay");


/* button functionality */
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");


rockBtn.addEventListener("click",() => playGame(playRound("rock",computerPlay())));

paperBtn.addEventListener("click",() =>  playGame(playRound("paper",computerPlay())));

scissorsBtn.addEventListener("click",() => playGame(playRound("scissors",computerPlay())));



/* button animation */
const btns = document.querySelectorAll("button");

btns.forEach(btns => btns.addEventListener("click", () => btns.classList.add("clicked")));

function removeTransition(e){
    if (e.propertyName !== "transform") return;
    this.classList.remove("clicked");
    console.log(e);
}

btns.forEach(btns => btns.addEventListener("transitionend",removeTransition));