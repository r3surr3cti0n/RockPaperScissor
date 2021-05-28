let chances = ["Kő", "Papír", "Olló"];

let computerPlay = () => {
	return chances[Math.floor(chances.length * Math.random())];
};
export { chances, computerPlay };
