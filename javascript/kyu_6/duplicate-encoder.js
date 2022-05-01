/*
 https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
*/

const duplicateEncode = (word) => {
    const letters = word.toLowerCase()
    let result = []
    for (const letter of letters) {
        const length = letters.split(letter).length - 1
        if (length === 1) {
            result.push('(')
        } else {
            result.push(')')
        }
    }
    return result.join('')
}
