export function frontDoorResponse(line) {
  const split = line.split('');
  return split[0];
}
export function frontDoorPassword(line) {
  const split = line.split('');
  const remove = split.shift()
  const join = split.join('')
  return `${remove.toUpperCase()}${join.toLowerCase()}`
}
export function backDoorResponse(line) {
  const trim = line.trim()
  const split = trim.split('');
  return split[split.length-1];
}

export function backDoorPassword(line) {
  return `${frontDoorPassword(line)}, please`
}