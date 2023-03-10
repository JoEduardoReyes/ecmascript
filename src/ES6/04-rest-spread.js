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
