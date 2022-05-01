/*
 https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
*/

const calc = (x) => {
    x = x.split('').map((v) => v.charCodeAt(0)).join('').split('')
    const minuend = x.map((v) => parseInt(v, 10)).reduce((a, b) => a + b, 0)
    const subtrahend = x.map((v) => v === '7' ? '1' : v).map((v) => parseInt(v, 10)).reduce((a, b) => a + b, 0)
    return minuend - subtrahend
}
