/*
 https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript
*/

const nicknameGenerator = (name) => name.length < 4 ? 'Error: Name too short' : name.substring(0, 'aeiou'.indexOf(name[2]) === -1 ? 3 : 4)
