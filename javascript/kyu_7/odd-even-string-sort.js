/*
 https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
*/

const sortMyString = (str) => {
    const oddIndexedChars = Array.from(str).filter((_, i) => i % 2 === 1).join('')
    const evenIndexedChars =Array.from(str).filter((_, i) => i % 2 === 0).join('')
    return `${evenIndexedChars} ${oddIndexedChars}`
}
