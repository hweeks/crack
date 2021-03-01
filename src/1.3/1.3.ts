export const naive = (stringToEncode: string): string => {
  return stringToEncode.trimEnd().replace(' ', '%20')
}

// only requires a single loop!
export const efficient = (stringToEncode: string): string => {
  let output = ''
  for (let i = 0; i < stringToEncode.length; i++) {
    if (stringToEncode[i] === ' ' && stringToEncode[i + 1] !== ' ' && stringToEncode[i + 1] !== undefined) output += '%20'
    else if (stringToEncode[i] !== ' ') output += stringToEncode[i]
  }
  return output
}
