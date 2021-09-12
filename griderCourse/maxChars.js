const maxChar = (str) => {
  const mapObj = {};
  let mostChars = 0;
  let resultValue;

  str.split('').forEach((char) => {
    if (!mapObj[char]) mapObj[char] = 1;
    mapObj[char] = mapObj[char] + 1;
  });

  for (const key in mapObj) {
    if (mapObj[key] > mostChars) {
      mostChars = mapObj[key];
      resultValue = key;
    }
  }

  return resultValue;
};

console.log(maxChar('hello'));
console.log(maxChar('11122233333'));
console.log(maxChar('hehe'));
