let computerPlay = () => {
	chances = ["rock", "paper", "scrissor"];
	return chances[Math.floor(chances.length * Math.random())];
};
