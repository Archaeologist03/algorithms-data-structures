// 6kyu
// Convert ASCII code (first "letter" code) to letter.
// Replace 2nd letter with last and last with 2nd. 

function decipherThis(str) {
  const arr = str.split(' ');
  const decipheredSentence = [];

  for (let word of arr) {
    const wordArr = word.split('');
    const thirdLet = wordArr[2];

    if (typeof parseInt(thirdLet) === 'number' && !isNaN(thirdLet)) {
      const code = wordArr[0] + wordArr[1] + wordArr[2];
      const charFromCode = String.fromCharCode(code);
      wordArr.splice(0, 3);
      wordArr.unshift(charFromCode);
    } else {
      const code = wordArr[0] + wordArr[1];
      const charFromCode = String.fromCharCode(code);
      wordArr.splice(0, 2);
      wordArr.unshift(charFromCode);
    }

    const secondLet = wordArr[1];
    const lastLet = wordArr[wordArr.length - 1];

    wordArr[1] = lastLet;
    wordArr[wordArr.length - 1] = secondLet;
    decipheredSentence.push(wordArr.join(''));
  }
  return decipheredSentence.join(' ');
}

decipherThis('72olle 103doo 100ya');
