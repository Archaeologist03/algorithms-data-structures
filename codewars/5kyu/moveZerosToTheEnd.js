// 5kyu
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function(arr) {
	const zerosArr = [];
	const newArr = arr.filter(val => {
		if (val === 0) zerosArr.push(0);
		return val !== 0;
	});
	return [...newArr, ...zerosArr];
};

const res = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
console.log(res);
