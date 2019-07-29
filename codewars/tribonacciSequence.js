// 6kyu
// Recursive solution for fibonacci alike problem.

function tribonacci(signature, n) {
  if (n < 3) return signature.slice(0, n);

  const last3Arr = signature.slice(signature.length - 3, signature.length);

  while (n > 3) {
    let lastVal = last3Arr.reduce((total, curVal) => total + curVal);

    n = n - 1;
    return tribonacci([...signature, lastVal], n);
  }

  return signature;
}

tribonacci([1, 1, 1], 10);
tribonacci([0, 0, 1], 10);
