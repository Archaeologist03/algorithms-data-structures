// 6kyu
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

const arrayDiff = (a, b) => a.filter(n => !b.includes(n));

arrayDiff([1, 2], [1]); // == [2]
const res = arrayDiff([1, 2, 2, 2, 3], [2]); // == [1,3]
console.log(res);
