function newUser(name, age, country) {
	var name = name || "Eduardo";
	var age = age || 24;
	var country = country || "GT";
	console.log(name + " " + age + " " + country);
}

newUser();
newUser("Eduardo Reyes", 25, "GT");

function newAdmin(name = "Eduardo", age = 24, country = "GT") {
	console.log(name + " " + age + " " + country);
}

newAdmin();
newAdmin("Ana", 25, "GT");
