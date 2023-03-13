function* getId() {
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345679";
	let randomCaracter = () => Math.floor(Math.random() * alphabet.length);
	let id = "MICHI";
	for (let index = 0; index < 8; index++) {
		id += alphabet[randomCaracter()];
	}
	yield id;
	yield* getId();
}

const id = getId();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
