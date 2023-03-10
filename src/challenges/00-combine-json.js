const data1 = {
	name: "Mr. Michi",
	food: "Pescado",
};

const data2 = {
	age: 12,
	color: "Blanco",
};

function combineData(data1, data2) {
	return {
		...data1,
		...data2,
	};
}

console.log(combineData(data1, data2));
