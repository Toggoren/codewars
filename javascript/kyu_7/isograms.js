/*
 https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
*/

const isIsogram = (str) => {
    const seen = new Set()
    for (const element of str.split('')) {
        if (seen.has(element.toLowerCase())) {
            return false
        }
        seen.add(element.toLowerCase())
    }
    return true
}
