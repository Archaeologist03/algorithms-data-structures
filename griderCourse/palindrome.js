const isPalindrome = (str) => {
  let isPali = true;
  const middleIndex = Math.floor(str.length / 2);
  str.split('').forEach((char, i) => {
    if (i === middleIndex) isPali = true;
    if (char !== str[str.length - (i + 1)]) isPali = false;
  });
  return isPali;
};

console.log(isPalindrome('abba'));
console.log(isPalindrome('notPalindrome'));
