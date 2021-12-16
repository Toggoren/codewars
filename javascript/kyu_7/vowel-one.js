/*
 https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript
*/

const vowelOne = (s) => Array.from(s).map((x) => 'aeiou'.includes(x.toLowerCase()) ? '1' : '0').join('')
