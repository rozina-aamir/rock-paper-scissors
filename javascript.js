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

let humanScore = 0;
let computerScore = 0;

console.log("Your score is: " + humanScore)
console.log("The computer's score is: " + computerScore)

function playRound(humanChoice, computerChoice) {
    if (humanChoice() = "rock") {
        return "Rock";
    } else if (humanChoice() = "paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);