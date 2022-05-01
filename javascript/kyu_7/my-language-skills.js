/*
 https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
*/

const myLanguages = (r) => Object.keys(r).filter((x) => r[x] >= 60).sort((a, b) => r[b] - r[a])
