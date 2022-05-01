/*
 https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript
*/

const numberOfPairs = (gloves) => {
    const storage = new Map()
    for (const glove of gloves) {
        if (!storage.has(glove)) {
            storage.set(glove, 0)
        }
        storage.set(glove, storage.get(glove) + 1)
    }
    return [...storage.values()].reduce((previousValue, currentValue) => previousValue + Math.floor(currentValue / 2), 0)
}
