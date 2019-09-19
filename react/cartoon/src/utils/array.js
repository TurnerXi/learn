export function flattern(arr) {
  return arr.reduce((total, item) => {
    return total.concat(Array.isArray(item) ? flattern(item) : item);
  }, []);
}
