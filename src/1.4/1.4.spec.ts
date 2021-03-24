import { naive, efficient } from './1.4'

describe('1.4 - Palindrome Permutation', () => {
  describe('naive', () => {
    test('taco cat', () => {
      expect(naive('tact coa')).toBe(true)
    })
    test('bad car', () => {
      expect(naive('bad rca')).toBe(false)
    })
    test('race car', () => {
      expect(naive('rae ccra')).toBe(true)
    })
  })
  describe('efficient', () => {
    test('taco cat', () => {
      expect(efficient('tact coa')).toBe(true)
    })
    test('bad car', () => {
      expect(efficient('bad rca')).toBe(false)
    })
    test('race car', () => {
      expect(efficient('rae ccra')).toBe(true)
    })
  })
})
