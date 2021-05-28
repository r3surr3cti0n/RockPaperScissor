import { chances, computerPlay } from "./computer.js";

let playerScore = 0;
let computerScore = 0;

let playerSelection;

const subTitle = document.querySelector(".sub-title");
const startText = document.querySelector(".start-text");
// Score
const compScoreOut = document.querySelector(".computer-score");
const playerScoreOut = document.querySelector(".player-score");
// Choice
const compChoiceOut = document.querySelector(".computer-choice");
const playerChoiceOut = document.querySelector(".player-choice");
// Buttons
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissor-btn");

rockBtn.addEventListener("click", () => {
	playerSelection = chances[0];
	Game(computerPlay(), playerSelection);
});
paperBtn.addEventListener("click", () => {
	playerSelection = chances[1];
	Game(computerPlay(), playerSelection);
});
scissorBtn.addEventListener("click", () => {
	playerSelection = chances[2];
	Game(computerPlay(), playerSelection);
});

let Game = (computerSelection, playerSelection) => {
	// Tie
	if (computerSelection == playerSelection) {
		subTitle.innerHTML = "Ez a kör döntetlen.";
	}
	// Player
	if (computerSelection == chances[0] && playerSelection == chances[1]) {
		subTitle.innerHTML = "A papír legyőzi a követ. Játékosé a pont.";
		playerScore++;
	}
	if (computerSelection == chances[1] && playerSelection == chances[2]) {
		subTitle.innerHTML = "Az olló legyőzi a papírt. Játékosé a pont.";
		playerScore++;
	}
	if (computerSelection == chances[2] && playerSelection == chances[0]) {
		subTitle.innerHTML = "A kő legyőzi az ollót. Játékosé a pont.";
		playerScore++;
	}
	// Computer
	if (computerSelection == chances[1] && playerSelection == chances[0]) {
		subTitle.innerHTML = "A papír legyőzi a követ. Számítógépé a pont.";
		computerScore++;
	}
	if (computerSelection == chances[2] && playerSelection == chances[1]) {
		subTitle.innerHTML = "Az olló legyőzi a papírt. Számítógépé a pont.";
		computerScore++;
	}
	if (computerSelection == chances[0] && playerSelection == chances[2]) {
		subTitle.innerHTML = "A kő legyőzi az ollót. Számítógépé a pont.";
		computerScore++;
	}

	// Choice
	compChoiceOut.innerHTML = `<img src="img/${computerSelection}.png" >`;
	playerChoiceOut.innerHTML = `<img src="img/${playerSelection}.png" >`;
	// Score
	compScoreOut.innerHTML = computerScore;
	playerScoreOut.innerHTML = playerScore;

	if (startText.classList.length == 1) {
		startText.classList.add("hide");
	}
};
