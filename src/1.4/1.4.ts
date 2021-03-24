export const naive = (input: string): boolean => {
  const charMap = Object.create(null) as {[key: string]: number}
  let charCount = 0
  for (let i = 0; i < input.length; i++) {
    const curChar = input[i]
    if (curChar !== ' ') {
      charCount++
      charMap[curChar] !== undefined ? charMap[curChar]++ : charMap[curChar] = 1
    }
  }
  const isEven = charCount % 2 === 0
  let hasSingleOddValue = false
  const isPalindrome = Object.entries(charMap).every(val => {
    const isCurrentEven = val[1] % 2 === 0
    if (isEven) {
      return isCurrentEven
    } else {
      if (!isCurrentEven && !hasSingleOddValue) {
        hasSingleOddValue = true
        return true
      }
      return isCurrentEven
    }
  })
  return isPalindrome
}

/**
 * More efficient because:
 *  1. returns early if false
 *  2. less memory consumed for operations
 * @param input string to check
 * @returns boolean
 */
export const efficient = (input: string): boolean => {
  const charMap = Object.create(null) as {[key: string]: number}
  for (let i = 0; i < input.length; i++) {
    const curChar = input[i]
    if (curChar !== ' ') {
      charMap[curChar] !== undefined ? charMap[curChar]++ : charMap[curChar] = 1
    }
  }
  let hasSingleOddValue = false
  for (const currChar in charMap) {
    const currIsEven = charMap[currChar] % 2 === 0
    if (!currIsEven && !hasSingleOddValue) {
      hasSingleOddValue = true
    } else if (!currIsEven && hasSingleOddValue) {
      return false
    }
  }
  return true
}
