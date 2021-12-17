/*
 https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
*/

const bingo = (ticket, win) => win > ticket
    .map(([c, n]) => c.split('').some((x) => x.charCodeAt(0) === n))
    .reduce((a, b) => a + b, 0)
    ? 'Loser!'
    : 'Winner!'

