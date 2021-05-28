chances = ["rock", "paper", "scissor"];
localStorage.setItem("playerScore", 0);
localStorage.setItem("computerScore", 0);
let playerScore = localStorage.getItem("playerScore");
let computerScore = localStorage.getItem("computerScore");

let computerPlay = () => {
	return chances[Math.floor(chances.length * Math.random())];
};

let Game = (computerSelection, playerSelection) => {
	// Tie
	if (computerSelection == playerSelection) {
		console.log("It's a tie.");
	}
	// Player
	if (computerSelection == chances[0] && playerSelection == chances[1]) {
		console.log("Paper defeats rock. Player won.");
		playerScore++;
	}
	if (computerSelection == chances[1] && playerSelection == chances[2]) {
		console.log("Scissor defeats paper. Player won.");
		playerScore++;
	}
	if (computerSelection == chances[2] && playerSelection == chances[0]) {
		console.log("Rock defeats scissor. Player won.");
		playerScore++;
	}
	// Computer
	if (computerSelection == chances[1] && playerSelection == chances[0]) {
		console.log("Paper defeats rock. Computer won.");
		computerScore++;
	}
	if (computerSelection == chances[2] && playerSelection == chances[1]) {
		console.log("Scissor defeats paper. Computer won.");
		computerScore++;
	}
	if (computerSelection == chances[0] && playerSelection == chances[2]) {
		console.log("Rock defeats scissor. Computer won.");
		computerScore++;
	}
};

// Repeat the game 10 times
for (let i = 0; i < 10; i++) {
	let playerChoice = prompt(`Round: ${i + 1} | Rock, paper or scissor?`);

	let containsWord =
		playerChoice.indexOf(chances[0]) &&
		playerChoice.indexOf(chances[1]) &&
		playerChoice.indexOf(chances[2]);
	console.log(`Round: ${i + 1}. Contains word: ${containsWord}`);

	if (
		playerChoice !== undefined &&
		playerChoice !== null &&
		containsWord >= 0
	) {
		playerChoice = playerChoice.toLowerCase();
		Game(computerPlay(), playerChoice);
	} else {
		i--;
		alert("Choose between rock,paper or scissor.");
	}
}

// Scores
alert(`Computer score: ${computerScore} | Player score: ${playerScore}`);
