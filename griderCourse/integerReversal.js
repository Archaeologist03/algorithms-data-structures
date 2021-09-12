const integerReversal = (n) => {
  const reversed = String(n).split('').reverse();
  if (reversed[reversed.length - 1] === '-') {
    reversed.pop();
    reversed.unshift('-');
  }
  return Number(reversed.join(''));
};

console.log(integerReversal(51));
console.log(integerReversal(-51));
console.log(integerReversal(50));
console.log(integerReversal(-50));
console.log(integerReversal(500));
console.log(integerReversal(-90));

