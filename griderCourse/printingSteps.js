const printingSteps = (n) => {
  for (let i = 0; i < n; i++) {
    const val = '#'.repeat(i + 1) + ' '.repeat(n - (i + 1));
    console.log(val);
  }
};

console.log(printingSteps(2));
console.log(printingSteps(3));
