// 6kyu
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.

function likes(names) {
	const len = names.length;

	switch (len) {
		case 0:
			return 'no one likes this';
		case 1:
			return `${names[0]} likes this`;
		case 2:
			return `${names[0]} and ${names[1]} like this`;
		case 3:
			return `${names[0]}, ${names[1]} and ${names[2]} like this`;
		default:
			return `${names[0]}, ${names[1]} and ${len - 2} others like this`;
	}
}

const x = likes(['Alex', 'Jacob', 'Mark', 'Max']);
// returns "Alex, Jacob and 2 others like this"
