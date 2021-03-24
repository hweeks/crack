import { naive } from './16.2'
import { book } from './book'

describe('16.2 - Count Occurrences', () => {
  describe('naive', () => {
    test('count book forward', () => {
      const wordCount = naive(book)
      expect(wordCount.was).toBe(6)
    })
    test('count book reverse', () => {
      const wordCount = naive(book.split('').reverse().join(''))
      expect(wordCount.saw).toBe(6)
    })
  })
})
