/*
 https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
*/

const formatDuration = (seconds) => !seconds ? 'now' : [(t) => [(t - (t % 60)) / 60, t % 60, 'second'], (t) => [(t - (t % 60)) / 60, t % 60, 'minute'], (t) => [(t - (t % 24)) / 24, t % 24, 'hour'], (t) => [(t - t % 365) / 365, t % 365, 'day'], (t) => [Infinity, t, 'year']].reduce((p, c, currentIndex, array) => p.concat([c(p[p.length - 1][0])]), [[seconds, NaN, NaN]]).reverse().filter(([, t,]) => t).map(([, t, s]) => `${t} ${s}${t > 1 ? 's' : ''}`).join(', ').replace(/,([^,]*)$/, ' and$1')
