import { chances, computerPlay } from "./computer.js";

// Score
let computerScore = 0;
let playerScore = 0;

let playerSelection;
let newGame = document.querySelector("#new-game");

// Text
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
// Other
let tie = 0;
const finale = document.querySelector(".finale");
const close = document.querySelector(".close");

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

setScore(computerScore, playerScore);
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
	setImg(computerSelection, playerSelection);
	// Score
	setScore(computerScore, playerScore);
	// Hide startText
	if (startText.classList.length == 1) {
		startText.classList.add("hide");
	}

	// End the game
	if (playerScore + computerScore >= 10) {
		let text = document.querySelector(".text");

		if (playerScore === computerScore) {
			text.textContent = "Döntetlen.";
		} else if (playerScore > computerScore) {
			text.textContent = "Gratulálok, nyertél!";
		} else {
			text.textContent = "Vesztettél.";
		}
		// Append message
		finale.appendChild(newGame);
		// Classlists
		finale.classList.remove("hide");
		document.body.classList.add("dark");
	}
};

function setScore(computer, player) {
	compScoreOut.innerHTML = computer + " pont";
	playerScoreOut.innerHTML = player + " pont";
}

function setImg(computer, player) {
	compChoiceOut.innerHTML = `<img src="img/${computer}.png" alt="${computer}" title="${computer}">`;
	playerChoiceOut.innerHTML = `<img src="img/${player}.png" alt="${player}" title="${player}">`;
}

close.addEventListener("click", () => {
	startText.classList.add("hide");
});
newGame.addEventListener("click", reset);

function reset() {
	subTitle.innerHTML = "";
	computerScore = 0;
	playerScore = 0;
	setScore(computerScore, playerScore);
	setImg("", "");
	finale.classList.add("hide");
	document.body.classList.remove("dark");
}
