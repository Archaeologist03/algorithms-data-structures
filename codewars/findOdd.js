// 6kyu
// Given an array, find the integer that appears an odd number of times.

function findOdd(A) {
	const objHolder = {};

	A.forEach(n =>
		objHolder[n] ? (objHolder[n] = objHolder[n] + 1) : (objHolder[n] = 1),
	);

	for (const prop in objHolder) {
		if (objHolder[prop] % 2 !== 0) return prop;
	}
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); /// === 5
