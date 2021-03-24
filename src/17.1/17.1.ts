export const naive = (a: number, b: number): number => {
  const arrA = Array(a).fill(0)
  const arrB = Array(b).fill(0)
  return [...arrA, ...arrB].length
}

/**
 * This one is very complex, and relies on an underlying understanding of how binary addition works
 * The step being taken here are the _same_ steps your computer takes when you use the + operator
 * Conceptually what is happening is:
 *   a = 2 => 10
 *   b = 3 => 11
 *   -- all binary numbers now --
 *   sum = (10 ^ 11) => 01
 *   carry = (10 & 11) => 10 << 1 => 100
 *   -- loop 2 --
 *   sum = (001 ^ 100) => 101
 *   carry = (001 & 100) => 000 << 1 = 0000
 *   sum = 101
 *   carry = 0000
 *   -- loop exit b/c carry = 0 --
 *   sum = 101; as a base10 = 5 because 101 = (2^2) + (0^1) + (2^0) = 4 + 0 + 1 = 5
 * @param a number
 * @param b number
 * @returns number
 */
export const efficient = (a: number, b: number): number => {
  if (b === 0) return a
  while (b !== 0) {
    const sum = (a ^ b) // add
    const carry = (a & b) << 1 // carry
    a = sum
    b = carry
  }
  return a
}
