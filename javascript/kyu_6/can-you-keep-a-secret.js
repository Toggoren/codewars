/*
 https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript
*/

const createSecretHolder = (secret) => (
    {
        getSecret: () => secret,
        setSecret: (new_secret) => secret = new_secret,
    }
)
