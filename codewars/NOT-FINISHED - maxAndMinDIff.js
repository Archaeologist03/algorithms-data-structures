// 5kyu

function maxAndMin(arr1, arr2) {
  const arr2Sorted = arr2.sort((a, b) => a - b);
  const arr1Sorted = arr1.sort((a, b) => a - b);

  let maxDiff = Math.abs(arr1Sorted[0] - arr2Sorted[arr2Sorted.length - 1]);
  let minDiff;

  
}

maxAndMin([3, 10, 5], [20, 7, 15, 8]); //, [17,2])
maxAndMin([3], [20]); //, [17,17])
maxAndMin([3, 10, 5], [3, 10, 5]); //, [7,0])
maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]); //, [9,1])
