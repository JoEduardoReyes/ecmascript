const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve("AsynC!!", 2000);
			  })
			: reject(new Error("Async Error"));
	});
};

const anotherFunction = async () => {
	const something = await fnAsync();
	console.log(something);
	console.log("Hello World");
};

console.log("before");
console.log(anotherFunction());
console.log("after");
