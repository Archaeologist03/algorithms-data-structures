function nextVersion(version) {
	const arr = version.split('.').map(char => Number(char));

	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] >= 9 && arr[i - 1] !== undefined) {
			arr[i] = 0;
			arr[i - 1] = arr[i - 1] + 1;
		} else if (arr[i - 1] !== undefined) {
			arr[i] += 1;
			break;
		} else if (arr[i] < 9 && arr[i - 1] !== undefined) {
			arr[i] += 1;
			break;
		} else if (arr[i] < 9) {
			arr[i] += 1;
			break;
		}
	}

	const x = arr.join('.');
	return x;
}

nextVersion('1.2.3'); // "1.2.4"
nextVersion('0.9.9'); // "1.0.0"
nextVersion('1'); // "2"
nextVersion('1.2.3.4.5.6.7.8'); // "1.2.3.4.5.6.7.9"
nextVersion('9.9'); // "10.0"
