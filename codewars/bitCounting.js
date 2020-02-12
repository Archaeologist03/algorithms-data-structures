// 6kyu
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

var countBits = function(n) {
	return Number(
		n
			.toString(2)
			.split('')
			.reduce((prev, curr) => Number(prev) + Number(curr)),
	);
};

countBits(1234); // 5
const x = countBits(9); // 2

console.log(x);
