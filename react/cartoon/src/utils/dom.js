export function joinClassName(...classnames) {
  return classnames.filter(i => i).join(" ");
}
