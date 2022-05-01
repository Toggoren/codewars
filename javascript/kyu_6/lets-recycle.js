/*
 https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript
*/

const recycle = (array) => {
    const result = {
        'paper': [],
        'glass': [],
        'organic': [],
        'plastic': [],
    }
    for (let element of array) {
        result[element['material']].push(element['type'])
        if (element['secondMaterial']) {
            result[element['secondMaterial']].push(element['type'])
        }
    }
    return [result['paper'], result['glass'], result['organic'], result['plastic']]
}
