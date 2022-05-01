/*
 https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript
*/

const sortByBit = (arr) => arr
    .sort((a, b) => {
        const numberOfBitsInA = Number(a).toString(2).split('1').length - 1
        const numberOfBitsInB = Number(b).toString(2).split('1').length - 1
        return numberOfBitsInA === numberOfBitsInB ? a - b : numberOfBitsInA - numberOfBitsInB;
    })
