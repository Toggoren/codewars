/*
 https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
*/

const minSum = (arr) => {
    arr = arr.slice().sort((a, b) => a - b)
    let sum = 0
    while (arr.length) {
        sum += arr.shift() * arr.pop()
    }
    return sum
}
