decodeMorse = function (morseCode) {
  const dictionary = {
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '/': ' ',
    '-·-·--': '!',
    '·-·-·-': '.',
    '--··--': ',',
  };

  let res = [];
  let splited = morseCode.split(' ');
  for (let i = 0; i < splited.length; i++) {
    if (dictionary[splited[i]] === ' ' && dictionary[splited[i + 1]] === ' ') {
      res.push(' ');
    } else {
      res.push(dictionary[splited[i]]);
    }
  }
  console.log(res);

  let x = morseCode.split(' ').map((char, i) => {
    if (dictionary[char] === undefined) return ' ';
    return dictionary[char];
  });
};

decodeMorse('.... . -.--   .--- ..- -.. .'); // 'HEY JUDE'
