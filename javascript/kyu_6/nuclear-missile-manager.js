/*
 https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript
*/

const launchAll = launchMissile => {
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            launchMissile(i)
        }, i * 1000)
    }
}
