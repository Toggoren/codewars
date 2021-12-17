/*
 https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/javascript
*/


const Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

const convert = (input, source, target) => {
    const sourceMap = Object.assign({}, ...Array.from(source).map((c, i) => ({[c]: i})));
    input = Array.from(input).reverse().map((c, i) => Math.pow(source.length, i) * sourceMap[c]).reduce((a, b) => a + b, 0)
    let result = ''
    while (input) {
        result = `${target[input % target.length]}${result}`
        input = Math.floor(input / target.length)
    }
    return result || target[0]
}