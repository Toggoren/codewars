/*
 https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript
*/

const getLengthOfMissingArray = (arrayOfArrays) => {
    if (!Array.isArray(arrayOfArrays)) {
        return 0
    }
    for (const array of arrayOfArrays) {
        if (!Array.isArray(array) || array.length === 0) {
            return 0
        }
    }
    arrayOfArrays = arrayOfArrays.sort((a, b) => a.length > b.length ? 1 : -1)
    for (let i = 1; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].length !== arrayOfArrays[i - 1].length + 1) {
            return arrayOfArrays[i - 1].length + 1
        }
    }
    return 0
}
