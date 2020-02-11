// 6kyu
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
	if (num <= 9) return 0;
	let count = 0;

	function runAgain(n) {
		const res = String(n)
			.split('')
			.reduce((prev, curr, i) => Number(prev) * Number(curr));

		count++;
		if (res > 9) return runAgain(res);
	}
	runAgain(num);
	return count;
}

console.log(persistence(39)); // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit === 3;

console.log(persistence(999)); // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2 === 4;

console.log(persistence(4)); // because 4 is already a one-digit number === 0;
