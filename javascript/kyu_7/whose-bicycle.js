/*
 https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript
*/

function whoseBicycle(diary1, diary2, diary3) {
    switch ([diary1, diary2, diary3]
        .map(e => Object.values(e).reduce((s, c) => s + c))
        .reduce((a, c, i, array) => {
            if (c > a[1]) {
                a[0] = i
                a[1] = c
            }
            if (c === a[1]) {
                a[0] = Object.values(ageTable)[a[0]] < Object.values(ageTable)[i] ? a[0] : i
                a[1] = Object.values(ageTable)[a[0]] < Object.values(ageTable)[i] ? a[1] : c
            }
            return a
        }, [null, 0])[0]) {
        case 0:
            return 'I need to buy a bicycle for my first son.'
        case 1:
            return 'I need to buy a bicycle for my second son.'
        case 2:
            return 'I need to buy a bicycle for my third son.'
    }
}
