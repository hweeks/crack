interface BookCount {[word: string]: number}

let badMemo: string
let oldMap: BookCount

export const naive = (bookToCheck: string): BookCount => {
  // if you get the same book back, return the same map you already built
  if (bookToCheck === badMemo) return oldMap
  badMemo = bookToCheck
  const bookMap = Object.create(null) as BookCount
  let wordBuilder = ''
  for (let i = 0; i < bookToCheck.length; i++) {
    const currChar = bookToCheck[i]
    if (currChar === ' ') {
      wordBuilder = wordBuilder.toLocaleLowerCase()
      wordBuilder = wordBuilder.replace(/[^\w\s]/gi, '')
      bookMap[wordBuilder] !== undefined ? bookMap[wordBuilder]++ : bookMap[wordBuilder] = 1
      wordBuilder = ''
    } else {
      wordBuilder += currChar
    }
  }
  oldMap = bookMap // a pointer, low overhead!
  return bookMap
}
