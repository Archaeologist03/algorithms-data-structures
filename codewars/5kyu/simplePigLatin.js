function pigIt(str) {
  return str
    .split(' ')
    .map((el) => (el.match(/\w/) ? el.substr(1) + el[0] + 'ay' : el))
    .join(' ');
}
