/*
 https://www.codewars.com/kata/57f8842367c96a89dc00018e/train/javascript
*/

const catMouse = (map, moves) => {
    if (!map.includes('C') || !map.includes('m')) {
        return 'boring without two animals'
    }
    map = map.split('\n').map((v) => v.split(''))
    let cat_X = -1
    let cat_Y = -1
    let mouse_X = -1
    let mouse_Y = -1
    for (const [y, row] of map.entries()) {
        if (cat_X !== -1 && cat_Y !== -1 && mouse_X !== -1 && mouse_Y !== -1) {
            break
        }
        for (const [x, cell] of row.entries()) {
            if (cat_X !== -1 && cat_Y !== -1 && mouse_X !== -1 && mouse_Y !== -1) {
                break
            }
            if (cell === 'C') {
                cat_X = x
                cat_Y = y
                continue
            }
            if (cell === 'm') {
                mouse_X = x
                mouse_Y = y
            }
        }
    }
    if (Math.abs(cat_X - mouse_X) + Math.abs(cat_Y - mouse_Y) <= moves) {
        return 'Caught!'
    } else {
        return 'Escaped!'
    }
}
