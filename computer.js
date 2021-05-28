let chances = ["ko", "papir", "ollo"];

let computerPlay = () => {
	return chances[Math.floor(chances.length * Math.random())];
};
export { chances, computerPlay };
