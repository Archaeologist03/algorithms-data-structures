const arrayChunking = (arr, n) => {
  const newArr = [];
  let subArr = [];
  arr.forEach((item, i) => {
    if (subArr.length < n) subArr.push(item);
    else {
      newArr.push(subArr);
      subArr = [];
      subArr.push(item);
    }
    if (arr.length - 1 === i) newArr.push(subArr);
  });
  return newArr;
};

// const arrayChunking = (array, size) => {
//   const chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// };

console.log(arrayChunking([1], 2));
console.log(arrayChunking([1, 2, 3, 4], 2));
console.log(arrayChunking([1, 2, 3, 4], 3));
console.log(arrayChunking([1, 2, 3, 4], 4));
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 3));
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7, 8], 3));
