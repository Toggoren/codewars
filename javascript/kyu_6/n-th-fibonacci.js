/*
 https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript
*/

const nthFibo = (n) => {
    if (n === 1) {
        return 0
    }
    const numbers = [0, 1, 1]
    for (let i = 3; i < n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2])
    }
    return numbers[n - 1]
}
