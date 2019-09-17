function formatDate(time, fmt) {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (fmt) {
    return fmt.replace(/y{4}/, year).replace(/M{2}/, padNumber(month, 2)).replace(/d{2}/, padNumber(day, 2));
  } else {
    return `${year}-${month}-${day}`;
  }
}

function padNumber(num, pad) {
  let str = String(num);
  let p = pad - str.length;
  if (p > 0) {
    str = Array(p).fill(0).join('') + str;
  }
  return str;
}

export {
  formatDate
}