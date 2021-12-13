/*
 https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
*/

const fakeBin = (x) => x.split('').map((x) => parseInt(x, 10) < 5 ? '0' : '1').join('')
