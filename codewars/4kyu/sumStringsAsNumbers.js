function sumStrings(a, b) {
  // if either of those does not exist just return other
  if (!a[0]) return b;
  if (!b[0]) return a;

  // init vars, and get longer and shorter num
  let longerNum = '';
  let shorterNum = '';
  if (a.length >= b.length) {
    longerNum = a;
    shorterNum = b;
  } else {
    longerNum = b;
    shorterNum = a;
  }

  // helpers vars
  let j = shorterNum.length - 1;
  let rest = 0;
  let currRes = 0;
  let resArr = [];

  // loop thru longerNum str
  for (let i = longerNum.length - 1; i >= 0; i--) {
    // Do all of this only if current shorterNum exist
    if (shorterNum[j]) {
      //get sum of both nums curr(same) ind + rest of previous two sum
      currRes = Number(shorterNum[j]) + Number(longerNum[i]) + rest;

      // if nums are same size.. no need to use rest, just unshift sum
      if (currRes > 9 && !longerNum[i - 1] && !shorterNum[j - 1]) {
        resArr.unshift(currRes);
      }
      // if previous if statement sum is over 9, set rest to 1, and set result of currRes(previous if sum) minus(-) 10 to resArr[0](unshift)
      else if (currRes > 9) {
        rest = 1;
        resArr.unshift(currRes - 10);
      }
      // if previous if statement sum is smaller than 10, set rest to 0, and unshift currRes(parent if statement) in resArr
      else if (currRes < 10) {
        rest = 0;
        resArr.unshift(currRes);
      }

      // helper var for tracking shorter num - (get to next num)
      j--;
    }

    // do stuff if next (not this iteration) longerNum exist
    if (longerNum[i - 1]) {
      //Do stuff if there isnt anymore of shorterNum's
      if (!shorterNum[j]) {
        // check if there is rest, and if it is add it to next longerNum, unshift to resArr
        if (rest === 1) {
          resArr.unshift(Number(longerNum[i - 1]) + rest);
          rest = 0;
        }
        // if there is no rest just unshift longerNum to resArr
        else if (rest === 0) {
          resArr.unshift(Number(longerNum[i - 1]));
        }
      }
    }
  }
  //Return Join-ed array of numbers and then remove front 0s
  return resArr.join('').replace(/^0+/, '');
}
