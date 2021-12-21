/*
 https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
*/

const solution = (list) => {
    const result = []
    let tmp = [list.shift()]
    for (const element of list.concat(Infinity)) {
        if (tmp[tmp.length - 1] + 1 === element) {
            tmp.push(element)
        } else {
            result.push(tmp)
            tmp = [element]
        }
    }
    return result
        .reduce((a, c) => c.length > 2 ? a.concat(`${c[0]}-${c[c.length - 1]}`) : a.concat(c), [])
        .join(',')
}
