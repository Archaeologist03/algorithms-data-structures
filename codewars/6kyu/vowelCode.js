// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

const vowNums = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  return string
    .split('')
    .map((char) => vowNums[char] || char)
    .join('');
}

function decode(string) {
  for (let prop in vowNums) {
    string = string.replace(vowNums[prop], prop);
  }
  return string;
}

encode('hello'); // 'h2ll4'
encode('This is an encoding test.'); // 'Th3s 3s 1n 2nc4d3ng t2st.
const encRes = encode('How are you today?'); //'H4w 1r2 y45 t4d1y?'
console.log(encRes);

const decRes = decode('h2ll4'); // 'hello'
console.log(decRes);
