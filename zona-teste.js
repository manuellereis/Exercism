const line = 'Teste'
function frontDoorResponse(line) {
    const split = line.split('');
    return split[0];
  }
function frontDoorPassword(line) {
    const split = line.split('');
    const remove = split.shift()
    const join = split.join('')
    return `${remove.toUpperCase()}${join.toLowerCase()}`
  }
function backDoorResponse(line) {
    const trim = line.trim()
    const split = trim.split('');
    return split[split.length-1];
  }
  
   function backDoorPassword(line) {
    return `${frontDoorPassword(line)}, please`
  }
console.log(line)
console.log(frontDoorResponse(line))
console.log(frontDoorPassword(line))
console.log(backDoorResponse(line))
console.log(backDoorPassword(line))