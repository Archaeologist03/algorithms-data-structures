function encrypter(string) {
  const changedValuesArr = [];

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      let rotCode;

      if (charCode + 13 > 122) {
        const rotReminder = charCode + 13 - 90;
        rotCode = 65 + rotReminder - 1;
      } else {
        rotCode = charCode + 13;
      }
      const reminder = 122 - rotCode;
      changedValuesArr.push(String.fromCharCode(97 + reminder));
    } else {
      changedValuesArr.push(' ');
    }
  }
  return changedValuesArr.join('');
}

// const res = encrypter('amz'); // "man");
const res2 = encrypter('my name is'); // "ao zmai eu", "Expect 'my name is' to return 'ao zmai eu'");
// encrypter("welcome to the organization") // "qibkyai ty tfi yvgmzenmteyz", "Expect 'welcome to our organization' to return 'qibkyai ty ysv yvgmzenmteyz'");
// encrypter("hello") // "fibby", "Expect 'hello' to return 'fibby'");
// encrypter("goodbye") // "gyyjloi", "Expect 'goodbye' to return 'gyyjloi'");

console.log(res2);
