const user = { name: "Eduardo", age: 24, country: "GT" };
const { name, ...values } = user;
console.log(name, values);
