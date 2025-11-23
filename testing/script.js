function getComputerChoice() {
    const roll = Math.floor(Math.random() * 3);
    if (roll === 0) return "rock";
    if (roll === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    const choice = prompt("Rock, paper, or scissors?");
    return choice ? choice.toLowerCase() : "";
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock") {
        if (computerSelection === "rock") {
            return "You draw! Rock draws with Rock";
        }
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        }
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        }
    }

    if (humanSelection === "paper") {
        if (computerSelection === "paper") {
            return "You draw! Paper draws with Paper";
        }
        if (computerSelection === "scissors") {
            return "You lose! Scissors beat Paper";
        }
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        }
    }

    if (humanSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "You draw! Scissors draw with Scissors";
        }
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        }
        if (computerSelection === "paper") {
            return "You win! Scissors beat Paper";
        }
    }

    return "Invalid choice. Please enter rock, paper, or scissors.";
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    alert(playRound(humanSelection, computerSelection));
}

playGame();
