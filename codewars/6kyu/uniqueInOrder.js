// 6kyu
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = iterable =>
	[...iterable].filter((char, i) => char !== iterable[i - 1]);

uniqueInOrder('AAAABBBCCDAABBB'); //== ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); //== ['A', 'B', 'C', 'c', 'A', 'D']
const res = uniqueInOrder([1, 2, 2, 3, 3]); //== [1,2,3]
console.log(res);
