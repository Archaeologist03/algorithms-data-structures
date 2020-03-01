// 6kyu
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array) {
	return String.fromCharCode(
		array.reduce((acc, curr, i, arr) => {
			const current = curr.charCodeAt(0);
			const next = arr[i + 1] ? arr[i + 1].charCodeAt(0) : null;

			if (current + 1 !== next && next) return acc + (current + 1);
			return acc + 0;
		}, 0),
	);
}

const res = findMissingLetter(['a', 'b', 'c', 'd', 'f']);
console.log(res);
