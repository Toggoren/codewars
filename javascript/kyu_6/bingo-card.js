/*
 https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/javascript
*/

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const getCard = () => {
    const letters2intervals = {'B': [1, 15], 'I': [16, 30], 'N': [31, 45], 'G': [46, 60], 'O': [61, 75]}
    let result = []
    for (const [letter, [min, max]] of Object.entries(letters2intervals)) {
        let tmp = new Set()
        // @formatter:off
        while ((tmp.size !== 5 && letter !== 'N') ||
               (tmp.size !== 4 && letter === 'N')) {
            tmp.add(randomIntFromInterval(min, max))
        }
        // @formatter:on
        result = result.concat(Array.from(tmp).map((x) => `${letter}${x}`))
    }
    return result
}
