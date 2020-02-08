// 6kyu
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
	const namesArr = names.map(nameObj => nameObj.name);
	const lastTwo =
		namesArr.length >= 1
			? namesArr.splice(namesArr.length - 2).join(' & ')
			: namesArr[namesArr.length - ``];

	return names.length === 0
		? ''
		: names.length <= 2
		? lastTwo
		: `${namesArr.join(', ')}, ${lastTwo}`;
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]);
// returns 'Bart, Lisa & Maggie'
