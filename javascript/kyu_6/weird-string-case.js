/*
 https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
*/

const toWeirdCase = (string) => string
    .split(' ')
    .map(
        (word) => word
            .split('')
            .map(((char, i) => {
                if (char.toUpperCase() !== char.toLowerCase()) {
                    if (i % 2 === 0) {
                        return char.toUpperCase()
                    } else {
                        return char.toLowerCase()
                    }
                } else {
                    return char
                }
            }))
            .join('')
    )
    .join(' ')
