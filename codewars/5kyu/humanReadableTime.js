// 5kyu
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

function humanReadable(seconds) {
	let hours = Math.floor(seconds / 3600);
	let restOfSecsAfterHours = seconds % 3600;

	let mins = Math.floor(restOfSecsAfterHours / 60);
	let restOfSecsAfterMins = seconds % 60;

	if (hours < 1) hours = '00';
	if (hours < 10 && hours !== '00') hours = '0' + hours;
	if (mins < 1) mins = '00';
	if (mins < 10 && mins !== '00') mins = '0' + mins;
	if (restOfSecsAfterMins < 1) restOfSecsAfterMins = '00';
	if (restOfSecsAfterMins < 10 && restOfSecsAfterMins !== '00')
		restOfSecsAfterMins = '0' + restOfSecsAfterMins;

	return `${hours}:${mins}:${restOfSecsAfterMins}`;
}

const x = humanReadable(359999); //'23:59:59'
console.log(x);
