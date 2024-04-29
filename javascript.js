console.log("Hello gamers, welcome to the classic of Rock, Paper, Scissors! How may I help you today");

//Write a logical statement where the computer returns either rock, paper, or scissors.
function getComputerChoice(){
    let computerChoice = parseInt(Math.random() * 10); 
    if(computerChoice <= 3){
        return "Rock";
    }
    else if(computerChoice <=7){
        return "Scissors";
    } else {
        return "Paper";
    }
}
console.log(getComputerChoice());


// Write a prompt for the player (no case sensitive, and either rock, paper, or scissors), and also go back to the prompt if it's neither of the three.
let choose = prompt("You pick: Rock, Paper, or Scissors");
function chosen(choose){
    return choose.charAt(0).toUpperCase() + choose.slice(1).toLowerCase();    
}

console.log(chosen(choose));
choice();
function choice(){
if (chosen(choose) === "Rock"){
    alert(`You have chosen ${choose}!`);
} else if (chosen(choose) === "Scissors"){
    alert(`You have chosen ${choose}. We'll see how this goes!`);
} else if (chosen(choose) === "Paper"){
    alert(`Interesting choice! You have chosen ${choose} this time`);
} else {
    //prompting again to choose one of the three (while trying to prevent an indefinite loop(which is happening right now))
    alert("What is that Garbage?");
   let choose = prompt("Let's do this again. Rock, Paper, or Scissors!");
   console.log(chosen(choose));
    choice();
    
}
}


// Write the score system for both player and the computer (for everytime one of them has a point).
// Write a function to play a round (to call playRound 5 times)
function playRound(){
}
// Write a function that calls playRound function (PlayGame).
// Write a function that knows which weapon is better (Paper > Rock, Rock > Scissors, Scissors > Paper).
