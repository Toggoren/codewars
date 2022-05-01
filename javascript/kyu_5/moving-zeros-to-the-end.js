/*
 https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
*/

const moveZeros = (arr) => {
    let movesCounter = 0
    let i = 0
    while (i < arr.length) {
        if (i + movesCounter > arr.length) {
            break
        }
        if (arr[i] === 0) {
            arr.push(arr.splice(i, 1)[0])
            movesCounter = movesCounter + 1
            continue
        }
        i = i + 1
    }
    return arr
}
