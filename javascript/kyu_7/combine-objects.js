/*
 https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript
*/

function combine(...objs) {
    const objResult = {}
    for (const obj of objs) {
        for (const key in obj) {
            if (!(key in objResult)) {
                objResult[key] = 0
            }
            objResult[key] += obj[key]
        }
    }
    return objResult
}
