// enhanced object literals

function newUser(user, age, country) {
	return {
		user,
		age,
		country,
	};
}

console.log(newUser("John", 20, "USA"));
