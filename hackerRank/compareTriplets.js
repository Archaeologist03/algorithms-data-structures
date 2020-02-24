function compareTriplets(a, b) {
	let aScore = 0;
	let bScore = 0;
	a.forEach((n, i) => {
		if (n > b[i]) aScore++;
		if (b[i] > n) bScore++;
	});
	return [aScore, bScore];
}

let aa = [17, 16, 30];
let bb = [99, 16, 8];
const x = compareTriplets(aa, bb);
console.log(x, 121);
