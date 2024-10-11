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
}