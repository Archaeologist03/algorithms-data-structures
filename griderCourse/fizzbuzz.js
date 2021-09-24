const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
  return 'Done'
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(55));
