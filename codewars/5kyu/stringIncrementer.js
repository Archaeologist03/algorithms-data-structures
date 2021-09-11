function incrementString(strng) {
  const extractNums = strng.match(/\d+/);
  const justNums = extractNums ? extractNums[0] : '0';
  const justLetters = strng.replace(/[0-9]/g, '');

  let leadingZeros = justNums
    .split('')
    .filter((num) => {
      let isNegative = true;
      if (num == 0 && isNegative) return num;
      else isNegative = true;
    })
    .join('');

  const numWithoutZeros = Math.abs(justNums);

  if (numWithoutZeros == 0) {
    leadingZeros = leadingZeros.substr(0, leadingZeros.length - 1);
  }

  const newNum = numWithoutZeros + 1;

  if (String(newNum).length !== String(numWithoutZeros).length) {
    leadingZeros = leadingZeros.substr(0, leadingZeros.length - 1);
  }

  return `${justLetters}${leadingZeros}${newNum}`;
}

const res = incrementString('foobar000'); // "foobar001");
incrementString('foo'); // "foo1");
incrementString('foobar001'); // "foobar002");
incrementString('foobar99'); // "foobar100");
incrementString('foobar099'); // "foobar100");
incrementString(''); // "1");

console.log(res);
