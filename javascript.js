function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function score() {
        console.log("Your score is: " + humanScore);
        console.log("The computer's score is: " + computerScore);
    }

    function playRound(humanChoice, computerChoice) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
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

    const roundCount = 5;

    for (let i = 1; i <= roundCount; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("You Lost!");
    }
}

playGame();