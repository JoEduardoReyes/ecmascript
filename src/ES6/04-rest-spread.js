// arrays destructuring

let fruits = ["apple", "banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring

let user = {
	username: "Eduardo",
	age: 25,
};

let { username, age } = user;

console.log(username, age);

// spread operator

let person = {
	name: "Eduardo",
	age: 24,
};
let country = "GT";

let data = { ...person, country };
console.log(data);

// rest operator

function sum(num, ...values) {
	console.log(values);
	console.log(num + values[0]);
	return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);
