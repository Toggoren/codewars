/*
 https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
*/

const isAnagram = (test, original) => {
    test = Array.from(test.toLowerCase())
    original = Array.from(original.toLowerCase())
    test.sort((a, b) => a.localeCompare(b))
    original.sort((a, b) => a.localeCompare(b))
    if (original.length !== test.length) {
        return false
    }
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== test[i]) {
            return false
        }
    }
    return true
}
