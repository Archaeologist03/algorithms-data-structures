// disregard punctuation & casing doesn't matter
const anagrams = (str1, str2) => {
  const mapper = (str) => {
    const mapObj = {};
    str
      .toLowerCase()
      .trim()
      .replace(/[^a-z]/g, '')
      .split('')
      .forEach((char) => {
        if (!mapObj[char]) mapObj[char] = 1;
        else mapObj[char]++;
      });
    return mapObj;
  };
  const mapOne = mapper(str1);
  const mapTwo = mapper(str2);

  if (Object.keys(mapOne).length !== Object.keys(mapTwo).length) return false;
  for (const key in mapOne) {
    if (mapOne[key] !== mapTwo[key]) return false;
  }
  return true;
};

console.log(anagrams('hello', 'elloh'));
console.log(anagrams('RAIL!  SAFETY!', 'fairy tales'));
console.log(anagrams('Hey bby', 'Hello there'));
console.log(anagrams('hello', 'elloh xx'));
