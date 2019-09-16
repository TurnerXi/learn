function formatNum(num) {
  if (!num) {
    return 0;
  }
  if (num >= Math.pow(10, 8)) {
    return (num / Math.pow(10, 8)).toFixed(2) + '亿';
  } else if (num >= Math.pow(10, 4)) {
    return (num / Math.pow(10, 4)).toFixed(2) + '万';
  }
}
export {
  formatNum
}
