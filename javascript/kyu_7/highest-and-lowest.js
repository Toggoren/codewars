/*
 https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
*/

const highAndLow = numbers => {
    const intArr = numbers.split(' ').map((x) => Number.parseInt(x))
    return `${Math.max(...intArr)} ${Math.min(...intArr)}`
}
