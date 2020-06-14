function anagrams(word, words) {
  let checker = word.split('').sort().join('');
  let newWords = [];

  words.forEach((w) => {
    let splited = w.split('').sort().join('');
    newWords.push(splited);
  });

  let res = [];
  newWords.forEach((w, i) => (w === checker ? res.push(words[i]) : false));
  return res;
}
