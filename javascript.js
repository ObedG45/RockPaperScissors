alert("Hello gamers, welcome to the classic of Rock, Paper, Scissors! You will be going against a computer to see who is a better rps competitor!");
// Declare the variables of Rock, Paper, and Scissors.

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

//Write a logical statement where the computer returns either rock, paper, or scissors.   
function getComputerChoice(){
   let computerChoice = parseInt(Math.random() * 10);
    if(computerChoice <= 3){
        let computerChoice = rock;
        return rock;
    }
    else if(computerChoice <=7){
        let computerChoice = scissors
        return scissors;
    } else if(computerChoice <=10) {
        let computerChoice = paper;
        return paper;
    }
}
// Write a prompt for the player (no case sensitive, and either rock, paper, or scissors).
    
function getHumanChoice(){
    let humanChoice = prompt("You pick: Rock, Paper, or Scissors.");
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}    

function humanDeclaration(humanChoice){
    getHumanChoice();
    if (humanChoice === "Rock"){
        let humanChoice = rock;
        return rock;
    } else if (humanChoice === "Paper"){
        let humanChoice = paper;
        return paper;
    } else if (humanChoice === "Scissors"){
        let humanChoice = scissors;
        return scissors;
    }
}
// Write the score system for both player and the computer (for everytime one of them has a point).
let humanScore = 0;
let computerScore = 0;
// Write a function to play a round and declare a winner for each round (while making all the string values true) (solved) 
function playRound(humanChoice, computerChoice){
    if ((humanChoice === rock) && (computerChoice === rock)){
        alert(`No points for either of you. Computer picked ${computerChoice} as well.`);
    } else if ((humanChoice === paper) && (computerChoice === paper)){
        alert(`No points for either of you. Computer picked ${computerChoice} as well.`);
    } else if ((humanChoice === scissors) && (computerChoice === scissors)){
        alert (`No points for either of you. Computer picked ${computerChoice} as well.`);
    } else if ((humanChoice === rock) && (computerChoice === scissors)){
        alert(`Good Job, you got a point from that dumb computer! Computer picked ${computerChoice}`);
        humanScore++;
    } else if ((humanChoice === scissors) && (computerChoice === rock)){
        alert (`Damn, that computer got a point from you. Computer picked ${computerChoice}`);
        computerScore++;
    } else if ((humanChoice === paper) && (computerChoice=== rock)){
        alert (`Good Job, you got a point from that dumb computer! Computer picked ${computerChoice}`);
        humanScore++;
    } else if ((humanChoice === rock) && (computerChoice === paper)){
        alert(`Damn, that computer got a point from you. Computer picked ${computerChoice}`);
        computerScore++;
    } else if ((humanChoice === scissors) && (computerChoice === paper)){
        alert(`Good Job, you got a point from that dumb computer! Computer picked ${computerChoice}`);
        humanScore++;
    } else if ((humanChoice === paper) && (computerChoice === scissors)){
        alert(`Damn, that computer got a point from you. Computer picked ${computerChoice}`);
        computerScore++;
    }

}
// Write a function that calls playRound function (PlayGame).
function playGame(){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    alert(`So far, computer has ${computerScore} points and you have ${humanScore} points.`);
}

