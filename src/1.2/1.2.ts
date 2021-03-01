export const naive = (source: string, compare: string): boolean => {
  const sourceLength = source.length
  const compareLength = compare.length
  const sourceChars = Object.create(null)
  const compareChars = Object.create(null)
  if (sourceLength !== compareLength) return false
  for (let i = 0; i < sourceLength; i++) {
    if (sourceChars[source[i]] !== undefined) sourceChars[source[i]]++
    else sourceChars[source[i]] = 1
    if (compareChars[compare[i]] !== undefined) compareChars[compare[i]]++
    else compareChars[compare[i]] = 1
  }
  return Object.entries(sourceChars).every(([letter, count]) => compareChars[letter] === count)
}

/**
 * The only advantage here is the early return condition in the final for loop.
 * It prevents us from continuing to do work past where we must!
 * @param source the base to compare against
 * @param compare the comparison
 */
export const efficient = (source: string, compare: string): boolean => {
  const sourceLength = source.length
  const sourceChars = Object.create(null)
  if (sourceLength !== compare.length) return false
  for (let i = 0; i < sourceLength; i++) {
    if (sourceChars[source[i]] !== undefined) sourceChars[source[i]]++
    else sourceChars[source[i]] = 1
  }
  for (let i = 0; i < sourceLength; i++) {
    sourceChars[compare[i]]--
    if (isNaN(sourceChars[compare[i]]) || sourceChars[compare[i]] < 0) return false
  }
  return true
}
