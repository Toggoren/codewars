/*
 https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
*/

const rentalCarCost = (d) => {
    if (d > 6) {
        return d * 40 - 50
    }
    if (d > 2) {
        return d * 40 - 20
    }
    return d * 40
}
