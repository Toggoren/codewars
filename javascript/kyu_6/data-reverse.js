/*
 https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
*/

const dataReverse = data => {
    const arr = []
    const chunkSize = 8
    for (let i = 0; i < data.length; i += chunkSize) {
        arr.push(data.slice(i, i + chunkSize))
    }
    return [].concat(...arr.reverse())
}
