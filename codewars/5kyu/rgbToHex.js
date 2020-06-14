// 5kyu
// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

function rgb(r, g, b) {
	return [r, g, b]
		.map(color => {
			if (color > 255) color = 255;
			if (color < 0) color = 0;
			return color.toString(16);
		})
		.map(color => (color.length < 2 ? '0' + color : color))
		.join('')
		.toLocaleUpperCase();
}

rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3
const res = rgb(11, 48, 199); // returns ADFF2F
console.log(res);

const z = 11;
console.log(z.toString(16));
