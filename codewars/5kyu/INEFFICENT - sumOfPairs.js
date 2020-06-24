var sum_pairs = function (ints, s) {
  const holderObj = {};
  const intsObj = {};
  ints.forEach((num, i) => {
    intsObj[num] = i;
  });
console.log(intsObj);
 
  ints.forEach((num) => {
    // Positive S
    if (s > 0) {
      const neededNum = s - num;
      const foundNumIndex = intsObj[neededNum];
      if (foundNumIndex !== undefined) {
        holderObj[foundNumIndex] = [num, neededNum];
      }
      // Negative & 0 S
    } else {
      const neededNum = s + num;
      const foundNumIndex = intsObj[neededNum];
      if (foundNumIndex !== undefined) {
        holderObj[foundNumIndex] = [num, neededNum];
      }
    }
  });



  const holderObjKeys = Object.keys(holderObj);
  let x = holderObjKeys.length > 0 ? holderObj[holderObjKeys[0]] : undefined;
};


l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l5 = [10, 5, 2, 3, 7, 5];

sum_pairs(l1, 8); // == [1, 7]
sum_pairs(l2, -6); // == [0, -6]
sum_pairs(l3, -7); // == undefined,
sum_pairs(l5, 10); // == [3, 7]
