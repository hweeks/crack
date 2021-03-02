import { naive, efficient } from './1.3'

describe('1.3 - URLify', () => {
  describe('naive', () => {
    test('sets "test string  " to "test%20string"', () => {
      expect(naive('test string  ')).toBe('test%20string')
    })
  })
  describe('efficient', () => {
    test('sets "test string  " to "test%20string"', () => {
      expect(efficient('test string  ')).toBe('test%20string')
    })
  })
})
