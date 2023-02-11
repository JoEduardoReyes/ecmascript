var lastName = "Eduardo";
lastName = "Reyes";
console.log(lastName);

let fruit = "banana";
fruit = "apple";
console.log(fruit);

const animal = "dog";
animal = "cat";
console.log(animal);

const fruitFunction = () => {
	if (true) {
		var fruit1 = "banana"; // function scope
		let fruit2 = "apple"; // block scope
		const fruit3 = "orange"; // block scope
	}
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
};

fruitFunction();
