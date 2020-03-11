// 5kyu

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  const memoObj = {};
  const sLower = s.toLowerCase();
  sLower.split('').forEach((char, i) => {
    if (memoObj[char]) {
      memoObj[char]['score']++;
    } else {
      memoObj[char] = { score: 1, orgChar: s[i] };
    }
  });

  for (const key in memoObj) {
    if (memoObj[key]['score'] === 1) return memoObj[key]['orgChar'];
  }
  return '';
}

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('sTress')); // 'T'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'
