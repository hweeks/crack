import {naive, efficient} from './1.1';

describe('1.1 - allUnique', () => {
  describe('naive', () => {
    test('word is all unique', () => {
      expect(naive('word')).toBe(true);
    })
    test('happy is not unique', () => {
      expect(naive('happy')).toBe(false);
    })
    test('empty string has no repeats', () => {
      expect(naive('')).toBe(true);
    })
    test('aa is not unique', () => {
      expect(naive('aa')).toBe(false);
    })
  })
  describe('efficient', () => {
    test('word is all unique', () => {
      expect(efficient('word')).toBe(true);
    })
    test('happy is not unique', () => {
      expect(efficient('happy')).toBe(false);
    })
    test('empty string has no repeats', () => {
      expect(efficient('')).toBe(true);
    })
    test('aa is not unique', () => {
      expect(efficient('aa')).toBe(false);
    })
  })
})
