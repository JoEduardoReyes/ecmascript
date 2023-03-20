class User {
	// constructor
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	// methods
	#speak() {
		return "Hello";
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
	// get and set
	get #uAge() {
		return this.age;
	}
	set #uAge(n) {
		this.age = n;
	}
}

const JoEdu = new User("JoEdu", 30);
console.log(JoEdu.uAge);
console.log((JoEdu.uAge = 20));
