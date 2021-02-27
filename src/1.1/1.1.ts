export const naive = (searchString: string): boolean => {
  const stringLength = searchString.length
  for (let i = 0; i < stringLength; i++) {
    for (let j = i + 1; j < stringLength; j++) {
      if (searchString[i] === searchString[j]) return false
    }
  }
  return true
}

export const efficient = (searchString: string): boolean => {
  // a null object has _no_ properties. this is avoids us running into any conflicts!
  const checkMap: Record<string, string> = Object.create(null)
  for (const letter of searchString) {
    if (checkMap[letter] !== undefined) return false
    else checkMap[letter] = letter
  }
  return true
}
