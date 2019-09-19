export function mergeClassName(...classnames) {
  return classnames.filter(i => i).reduce((total, item) => {
    return total.concat(item.split(' '));
  }, []).join(' ');
}
