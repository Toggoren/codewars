/*
 https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript
*/

const getDecimal = (n) => n.toString().split('.').length === 1 ? 0 : Number.parseFloat(`0.${n.toString().split('.').reverse()[0]}`)