const capitalization = (str) => {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');
};

console.log(capitalization('hello there'));
console.log(capitalization('hello, here! ah, a sentence.'));
