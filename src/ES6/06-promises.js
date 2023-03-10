const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			resolve("Hey!!");
		} else {
			reject("whooops!");
		}
	});
};

anotherFunction()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));
