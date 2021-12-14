/*
 https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
*/

const rgb = (r, g, b) => [r, g, b]
    .map((x) => Math.min(Math.max(x, 0), 255))
    .map((x) => x.toString(16).toUpperCase().padStart(2, '0'))
    .join('')
