import { naive, efficient } from './17.1'

describe('17.1 - Add without plus', () => {
  describe('naive', () => {
    test('2 + 3', () => {
      expect(naive(2, 3)).toBe(5)
    })
    test('1 + 0', () => {
      expect(naive(1, 0)).toBe(1)
    })
  })
  describe('efficient', () => {
    test('2 + 3', () => {
      expect(efficient(2, 3)).toBe(5)
    })
    test('1 + 0', () => {
      expect(efficient(1, 0)).toBe(1)
    })
  })
})
