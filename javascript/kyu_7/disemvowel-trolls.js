/*
 https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
*/

const disemvowel = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    return str.split('').filter((c) => !vowels.has(c.toLowerCase())).join('')
}
