export const naive = (searchString : string) => {
  const stringLength = searchString.length;
  for (let i = 0; i < stringLength; i++) {
    for (let j = i + 1; j < stringLength; j++) {
      if (searchString[i] === searchString[j]) return false;
    }
  }
  return true;
}

export const efficient = (searchString: string) => {
  const checkMap = Object.create(null);
  for (let letter of searchString) {
    if (checkMap[letter]) return false;
    else checkMap[letter] = letter;
  }
  return true;
}
