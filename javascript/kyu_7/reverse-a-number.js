/*
 https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript
*/

const reverseNumber = (n) => (n < 0 ? -1 : +1) * Number.parseInt(Math.abs(n).toString().split('').reverse().join(''), 10)
