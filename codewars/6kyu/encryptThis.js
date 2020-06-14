// 6kyu
// First letter to ASCII code.
// Replace 2nd and last letter.

var encryptThis = function(text) {
  const arr = text.split(' ');
  const encryptedArr = [];

  for (let word of arr) {
    const wordArr = word.split('');
    const codeFromLet = word.charCodeAt(0).toString();
    const secondLet = wordArr[1];
    const lastLet = wordArr[wordArr.length - 1];

    wordArr[0] = codeFromLet;
    wordArr[1] = lastLet;
    wordArr[wordArr.length - 1] = secondLet;

    encryptedArr.push(wordArr.join(''));
  }
  return encryptedArr.join(' ');
};

encryptThis('hello world');
