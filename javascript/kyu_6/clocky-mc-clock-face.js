/*
 https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript
*/

const whatTimeIsIt = (angle) => {
    let hour = Math.floor(angle / 30) || 12
    let min = Math.floor((angle % 30) * 2)
    hour = String(hour).padStart(2, '0')
    min = String(min).padStart(2, '0')
    return `${hour}:${min}`
}
