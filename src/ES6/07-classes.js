// daclarar
/* class User {} */
// instancia
/* const newUser = new User();*/

// methods
/*
class User {
	// metodos
	greeting() {
		return "Hello";
	}
}

const EDark = new User();

console.log(EDark.greeting());

const JoEdu = new User();

console.log(JoEdu.greeting());

*/
// construtor
/*
class User {
	constructor() {
		console.log("Nuevo Usuario");
	}
	greeting() {
		return "Hello";
	}
}

const David = new User();
*/
// this
/*
class User {
	constructor(name) {
		this.name = name;
	}
	speak() {
		return "Hello";
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
}

const Ana = new User("Ana");

console.log(Ana.greeting());

*/
// setters and getters

class User {
	// constructor
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	// methods
	speak() {
		return "Hello";
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
	// get and set
	get uAge() {
		return this.age;
	}
	set uAge(n) {
		this.age = n;
	}
}

const JoEdu = new User("JoEdu", 30);
console.log(JoEdu.uAge);
console.log((JoEdu.uAge = 20));
