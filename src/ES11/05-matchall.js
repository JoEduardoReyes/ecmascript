const regex = /\d(Apple)+\d/g;

const fruit =
	"Apple, Banana, Pear, Pineapple, Strawberry, Watermelon, lorem Apple ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid";

for (const match of fruit.matchAll(regex)) {
	console.log(match);
}
