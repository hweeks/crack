import { naive, efficient } from './1.2'

describe('1.2 - permutation', () => {
  describe('naive', () => {
    test('cat and tap are not permutations', () => {
      expect(naive('cat', 'tap')).toBe(false)
    })
    test('cat and tac are permutations', () => {
      expect(naive('cat', 'tac')).toBe(true)
    })
  })
  describe('efficient', () => {
    test('cat and tap are not permutations', () => {
      expect(efficient('cat', 'tap')).toBe(false)
    })
    test('cat and tac are permutations', () => {
      expect(efficient('cat', 'tac')).toBe(true)
    })
  })
})
