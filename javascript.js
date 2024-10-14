function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("The computer says: " + getComputerChoice())

function getHumanChoice() {
    let humanChoice = window.prompt("Make your choice. Rock, paper, or scissors.");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("You say: " + getHumanChoice())

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
}


console.log("Your score is: " + humanScore)
console.log("The computer's score is: " + computerScore)

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("It's a draw!");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log(`You loose this round. ${computerChoice} beats ${humanChoice} this time around.`);
        computerScore ++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log(`You win this round! ${humanChoice} has won ${computerChoice}!`);
        humanScore ++;
    } else if(humanChoice == "Paper" && computerChoice == "Rock") {
        console.log(`You win this round! ${humanChoice} has won ${computerChoice}!`);
        humanScore ++;
    } else if(humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("It's a draw!");
    } else if(humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log(`You loose this round. ${computerChoice} beats ${humanChoice} this time around`);
        computerScore ++;
    } else if(humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log(`You loose this round. ${computerChoice} beats ${humanChoice} this time around.`);
        computerScore ++;
    } else if(humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log(`You win this round! ${humanChoice} has won ${computerChoice}!`);
        humanChoice ++;
    } else if(humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("It's a draw!");
    } else {
        console.log("Please enter a valid answer.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);