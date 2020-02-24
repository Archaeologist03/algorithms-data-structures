// 6kyu

function expandedForm(num) {
	const numsArrRes = [];

	const numsArr = String(num).split('');

	numsArr.forEach((n, i) => {
		if (n !== '0') {
			const fullNum = n.padEnd(numsArr.length - i, '0');
			numsArrRes.push(fullNum);
		}
	});

	return numsArrRes.join(' + ');
}

const x = expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
console.log(x);
