const findVowels = (str) => {
  let counter = 0;
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  str
    .toLowerCase()
    .split('')
    .forEach((char) => vowels[char] && counter++);
  return counter;
};

console.log(findVowels('Hello world'));
console.log(findVowels('Why do you ask?'));
console.log(findVowels('why'));
