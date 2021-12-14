/*
 https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript
*/

function findMissing(arr1, arr2) {
    while (arr2.length) {
        arr1.splice(arr1.indexOf(arr2.pop()), 1)
    }
    return arr1[0]
}
