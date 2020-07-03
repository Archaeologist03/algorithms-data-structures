String.prototype.camelCase = function () {
  const wordsArr = this.trim().split(' ');
  if (!wordsArr[0]) return '';

  return wordsArr
    .map((word) => `${word[0].toUpperCase()}${word.slice(1, word.length)}`)
    .join('');
};

const res = 'test case'.camelCase(); // "TestCase");
'camel case method'.camelCase(); // "CamelCaseMethod");
'say hello '.camelCase(); // "SayHello");
' camel case word'.camelCase(); // "CamelCaseWord");
''.camelCase(); // "");

console.log(res);
