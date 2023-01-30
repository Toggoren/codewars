/*
 https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript
*/

const spiralize = (n) => {
    let arr = Array.from(Array(n), () => Array(n).fill(0)), length = n, x = 0, y = 0, d = 0;
    for (let i = 0; i < n; i++) {
        let dx = d === 3 ? -1 : d === 1 ? 1 : 0, dy = d === 2 ? -1 : d === 0 ? 1 : 0;
        for (let j = 0; j < length; j++) {
            arr[x + dx * j][y + dy * j] = 1
        }
        x += dx * (length - 1)
        y += dy * (length - 1)
        if (i !== 0 && i % 2 === 0) {
            length -= 2
        }
        d = (d + 1) % 4
    }
    return arr
}

