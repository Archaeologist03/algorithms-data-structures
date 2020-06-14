function score(dice) {
  let counter = 0;
  const obj = {};

  dice.forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));

  for (let prop in obj) {
    if (obj[prop] > 4) {
      obj[`second${prop}`] = 2;
      obj[prop] -= 2;
    } else if (obj[prop] > 3) {
      obj[`second${prop}`] = 1;
      obj[prop]--;
    }
  }

  if (obj[1] === 3) counter += 1000;
  if (obj[6] === 3) counter += 600;
  if (obj[5] === 3) counter += 500;
  if (obj[4] === 3) counter += 400;
  if (obj[3] === 3) counter += 300;
  if (obj[2] === 3) counter += 200;
  if (obj.second1 === 2 || obj[1] === 2) counter += 200;
  if (obj.second5 === 2 || obj[5] === 2) counter += 100;
  if (obj[1] === 1 || obj.second1 === 1) counter += 100;
  if (obj[5] === 1 || obj.second5 === 1) counter += 50;

  return counter;
}
