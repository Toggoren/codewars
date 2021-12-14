/*
 https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
*/

function nbDig(n, d) {
    let count = 0
    for (let i = 0; i <= n; i++) {
        count += (i * i).toString().split(d.toString()).length - 1
    }
    return count
}
