/*
 https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
*/

const maxTriSum = (numbers) => {
    const triplet = []
    for (let i = 0; i < 3; i++) {
        triplet.push(Math.max(...numbers))
        while (numbers.indexOf(triplet[i]) !== -1) {
            numbers = numbers.filter((x) => x !== triplet[i])
        }
    }
    return triplet.reduce((a, c) => a + c, 0)
}
