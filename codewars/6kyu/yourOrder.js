function order(words) {
  if (words === '') return '';

  const splited = words.split(' ');
  const arrHolder = Array(splited.length);
  splited.forEach((word, i) => {
    const wordNum = word.replace(/\D/g, '');
    arrHolder[wordNum - 1] = word;
  });
  return arrHolder.join(' ');
}

order('is2 Thi1s T4est 3a'); //"Thi1s is2 3a T4est")
order('4of Fo1r pe6ople g3ood th5e the2'); // "Fo1r the2 g3ood 4of th5e pe6ople")
order(''); // "")
