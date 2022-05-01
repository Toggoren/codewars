/*
 https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript
*/

const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((acc, cur) => acc + cur, 0)
