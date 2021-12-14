/*
 https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
*/

const add = (num1, num2) => {
    const length = Math.max(Math.floor(Math.log10(num1)) + 1, Math.floor(Math.log10(num2)) + 1)
    const num1Str = num1.toString().padStart(length, '0')
    const num2Str = num2.toString().padStart(length, '0')
    return Number(Array.from({length}, (_, i) => Number(num1Str[i]) + Number(num2Str[i])).map(String).join(''))
}
