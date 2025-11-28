const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

function getComputerChoice() {
    const roll = Math.floor(Math.random() * 3);
    if (roll === 0) return "rock";
    if (roll === 1) return "paper";
    if (roll == 2) return "scissors";
}

const resultsList = document.querySelector("#resultsList")

function playRound(humanSelection) {

    computerSelection = getComputerChoice()

    if (humanSelection === "rock") {
        if (computerSelection === "rock") {
            humanScore++
            return "You draw! Rock draws with Rock";
        }
        if (computerSelection === "paper") {
            computerScore++
            return "You lose! Paper beats Rock";
        }
        if (computerSelection === "scissors") {
            humanScore++
            computerScore++
            return "You win! Rock beats Scissors";
        }
    }

    if (humanSelection === "paper") {
        if (computerSelection === "paper") {
            humanScore++
            return "You draw! Paper draws with Paper";
        }
        if (computerSelection === "scissors") {
            computerScore++
            return "You lose! Scissors beat Paper";
        }
        if (computerSelection === "rock") {
            humanScore++
            computerScore++
            return "You win! Paper beats Rock";
        }
    }

    if (humanSelection === "scissors") {
        if (computerSelection === "scissors") {
            humanScore++
            return "You draw! Scissors draw with Scissors";
        }
        if (computerSelection === "rock") {
            computerScore++
            return "You lose! Rock beats Scissors";
        }
        if (computerSelection === "paper") {
            humanScore++
            computerScore++
            return "You win! Scissors beat Paper";
        }
    }

    return "Invalid choice. Please enter rock, paper, or scissors.";
}

const scoreboard = document.querySelector('#scoreboard')
let score = document.createElement('p')
scoreboard.appendChild(score)

const result = document.createElement('li')
resultsList.appendChild(result)
function playGame(humanSelection) {
    result.textContent = playRound(humanSelection)
    score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`
    
}



