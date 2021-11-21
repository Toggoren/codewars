/*
 https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

const countPositivesSumNegatives = (input) => input == null || input.length === 0 ? [] : [input.reduce((a, c) => c > 0 ? a + 1 : a, 0), input.reduce((a, c) => c < 0 ? a + c : a, 0)]
