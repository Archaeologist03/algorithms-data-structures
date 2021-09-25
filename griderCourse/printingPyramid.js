const printingPyramid = (n) => {
  for (let i = 0; i < n; i++) {
    const leftSide = ' '.repeat(n - (i + 1)) + '#'.repeat(i);
    const rightSide = '#'.repeat(i) + ' '.repeat(n - (i + 1));
    const res = leftSide + '#' + rightSide;
    console.log(res);
  }
};

console.log(printingPyramid(2));
console.log(printingPyramid(3));
console.log(printingPyramid(5));
