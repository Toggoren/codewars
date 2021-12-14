/*
 https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
*/

const sentence = (List) => List
    .sort((a, b) => Number.parseInt(Object.keys(a)[0], 10) - Number.parseInt(Object.keys(b)[0], 10))
    .map((x) => Object.values(x)[0])
    .join(' ')
