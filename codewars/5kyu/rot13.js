function rot13(message) {
  const changedValuesArr = [];

  for (let i = 0; i < message.length; i++) {
    const charCode = message.toUpperCase().charCodeAt(i);

    // in uppercase alphabet range
    if (charCode >= 65 && charCode <= 90) {
      let newValue;

      // 2nd half of alphabet - goes above z with a 13 chars shift
      if (charCode + 13 > 90) {
        const reminder = charCode + 13 - 90;
        newValue = String.fromCharCode(65 + reminder - 1);
      } else {
        newValue = String.fromCharCode(charCode + 13);
      }
      // turn char to lowercase if org msg char was lowercased.
      message.charCodeAt(i) > 90
        ? changedValuesArr.push(newValue.toLowerCase())
        : changedValuesArr.push(newValue);
    } else {
      changedValuesArr.push(message[i]);
    }
  }
  return changedValuesArr.join('');
}

rot13('test'); // "Input: test , Expected Output: grfg ,
const res = rot13('Test'); // "Input: Test , Expected Output: Grfg
console.log(res);
