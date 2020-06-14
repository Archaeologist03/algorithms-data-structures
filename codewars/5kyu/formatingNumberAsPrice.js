// 5kyu
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.
// function should return a string 'NaN' if the input is not a valid number

var numberToPrice = function(number) {
	if (typeof number !== 'number') return 'NaN';

	const numsArr = String(number).split('');

	// --- Find Cents
	const indexOfDot = numsArr.findIndex(item => item === '.');
	let cents =
		indexOfDot !== -1 ? numsArr.splice(indexOfDot + 1, 2).join('') : '00';
	if (cents.length < 2) cents += '0';

	// --- Find main number
	let mainNum = [];
	// remove everything from dot up
	indexOfDot !== -1 && numsArr.splice(indexOfDot);

	// loop backwards - on third add comma
	let counter = 0;
	for (let i = numsArr.length - 1; i >= 0; i--) {
		counter++;
		mainNum.unshift(numsArr[i]);

		if (counter === 3 && numsArr[i - 1] && numsArr[i - 1] !== '-') {
			mainNum.unshift(',');
			counter = 0;
		}
	}

	return `${mainNum.join('')}.${cents}`;
};

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.511
