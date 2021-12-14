/*
 https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
*/

const solution = (str, ending) => ending !== '' ? str.slice(-ending.length) === ending : true
