function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  let second;
  let minute;
  let hour;
  let day;
  let year;

  seconds < 60 ? (second = seconds) : false;
  if (seconds >= 60) {
    minute = Math.floor(seconds / 60);
    second = seconds - minute * 60;
  }
  if (minute >= 60) {
    hour = Math.floor(minute / 60);
    minute = minute - hour * 60;
  }
  if (hour >= 24) {
    day = Math.floor(hour / 24);
    hour = hour - day * 24;
  }
  if (day >= 365) {
    year = Math.floor(day / 365);
    day = day - year * 365;
  }

  const time = {
    year,
    day,
    hour,
    minute,
    second,
  };
  let res = [];

  for (let prop in time) {
    if (time[prop]) {
      res.push(
        time[prop] > 1 ? `${time[prop]} ${[prop]}s` : `${time[prop]} ${[prop]}`,
      );
    }
  }

  let string = '';

  res.forEach((el, i) => {
    if (res.length === 1) {
      string += el;
    } else if (i === res.length - 1) {
      string += `and ${el}`;
    } else if (i === res.length - 2) {
      string += `${el} `;
    } else {
      string += `${el}, `;
    }
  });

  return string;
}
