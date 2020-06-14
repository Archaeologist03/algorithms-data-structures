// 6kyu
// Accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
	const first3 = `(${numbers.splice(0, 3).join('')})`;
	const rest = `${numbers.splice(0, 3).join('')}-${numbers
		.splice(0, 4)
		.join('')}`;

	return `${first3} ${rest}`;
}

const res = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// returns "(123) 456-7890"

console.log(res);
