/*
 https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
*/

const isPrime = (num) => {
    if (num < 2) {
        return false
    }
    if (num === 2) {
        return true
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
