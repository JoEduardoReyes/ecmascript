// flat

const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]]];
console.log(array.flat(3));

// flatMap

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((x) => [x, x * 2]));
