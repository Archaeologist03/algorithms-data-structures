function iqTest(numbers) {
  const numsArr = numbers.split(' ').map((num) => Number(num));

  const evens = numsArr.filter((num) => num % 2 === 0);
  if (evens.length === 1)
    return numsArr.findIndex((num) => num === evens[0]) + 1;

  return numsArr.findIndex((num) => num % 2 !== 0) + 1;
}

// const res = iqTest('2 4 7 8 10'); // 3);
// const res2 = iqTest('1 2 2'); // 1);
const res3 = iqTest('1 2 1 1'); // 1);

console.log(res3);
