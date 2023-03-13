function* iterate(array) {
	for (let value of array) {
		yield value;
	}
}

const it = iterate(["Eduardo", "Maria", "Pedro", "Ana", "Julia"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
