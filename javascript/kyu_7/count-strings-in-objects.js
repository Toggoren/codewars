/*
 https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript
*/

const strCount = (obj) => {
    let counter = 0
    if (!obj) {
        return 0
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'string') {
                counter += 1
            }
            if (typeof obj[key] === 'object') {
                counter += strCount(obj[key])
            }
        }
    }
    return counter
}
