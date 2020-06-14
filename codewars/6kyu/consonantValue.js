// 6kyu
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alpahabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

function solve(s) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const values = [];
	let res = 0;

	s.split('').forEach(char => {
		const currCharValue = char.charCodeAt(0) - 97 + 1;

		if (!vowels.includes(char)) {
			res += currCharValue;
		} else if (vowels.includes(char) && res !== 0) {
			values.push(res);
			res = 0;
		}
	});
	res && values.push(res);

	return Math.max(...values);
}

console.log(solve('zodiacs')); // = 26

console.log(solve('strength')); // = 57
