function rot13(message) {
  const changedValuesArr = [];
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);

    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 65 && charCode <= 90)
    ) {
      let newValue;
      if (charCode - 13 < 65 || charCode - 13 < 97) {
        console.log(
          charCode,
          charCode - 13,
          message[i],
          String.fromCharCode(charCode - 13),
        );

        const reminder = charCode - 65

        newValue = String.fromCharCode(charCode + 13);

        console.log(newValue);
      } else {
        newValue = String.fromCharCode(charCode - 13);
      }
      changedValuesArr.push(newValue);
    } else {
      changedValuesArr.push(message[i]);
    }
  }
  return changedValuesArr.join('');
}

// rot13('test'); // "Input: test , Expected Output: grfg ,
const res = rot13('Test1$'); // "Input: Test , Expected Output: Grfg
console.log(res);

//97 - 122
// 65 - 90
console.log('e'.charCodeAt(0));
