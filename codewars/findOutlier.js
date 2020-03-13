function findOutlier(integers) {
  const odd = [];
  const even = [];
  integers.forEach(n => (n % 2 !== 0 ? odd.push(n) : even.push(n)));

  return odd.length >= 2 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2])); //, 1);
console.log(findOutlier([1, 2, 3])); //, 2);
console.log(findOutlier([2, 6, 8, 10, 3])); //, 3);
console.log(findOutlier([0, 0, 3, 0, 0])); //, 3);
console.log(findOutlier([1, 1, 0, 1, 1])); //, 0);
