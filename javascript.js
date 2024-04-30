console.log("Hello gamers, welcome to the classic of Rock, Paper, Scissors! You will be going against a computer to see who is a better rps competitor!");
// Declare the variables of Rock, Paper, and Scissors.

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

//Write a logical statement where the computer returns either rock, paper, or scissors.
    let computerChoice = parseInt(Math.random() * 10);
function getComputerChoice(){ 
    if(computerChoice <= 3){
        return rock;
    }
    else if(computerChoice <=7){
        return scissors;
    } else if(computerChoice <=10) {
        return paper;
    }
}

console.log(getComputerChoice());


// Write a prompt for the player (no case sensitive, and either rock, paper, or scissors).
    let humanChoice = prompt("You pick: Rock, Paper, or Scissors.");
function getHumanChoice(){
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}
function humanDeclaration(){
if (humanChoice === "Rock"){
    return rock;
} else if (humanChoice === "Paper") {
    return paper;
} else if (humanChoice === "Scissors") {
    return scissors;
}
}
humanDeclaration();
console.log(getHumanChoice());
// Write the score system for both player and the computer (for everytime one of them has a point).
let humanScore = 0;
let computerScore = 0;
// Write a function to play a round and declare a winner for each round (ongoing right now)
function playRound(humanChoice, computerChoice){
    rockPaperScissors(rock, paper, scissors);
    if (computerChoice > humanChoice && humanChoice < computerChoice) {
        alert ("Damn, that computer got a point for that");
    } else if (humanChoice > computerChoice && computerChoice < humanChoice){
        alert ("Good Job, you got a point for that, keep going to beating that dumb computer");
    } else {
        alert ("No points for either of you");
}
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
// Write a function that calls playRound function (PlayGame).
function playGame(){

}
// Write a function that knows which weapon is better (Paper > Rock, Rock > Scissors, Scissors > Paper).

function rockPaperScissors(rock, paper, scissors){
    if (rock > scissors || scissors > paper || paper > rock){
        return true;
    } else {
        return false;
    }
}
