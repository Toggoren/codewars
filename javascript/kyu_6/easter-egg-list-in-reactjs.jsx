/*
 https://www.codewars.com/kata/5a95947f4a6b342636000173/train/javascript
*/

import React from 'react';

export const EggList = (props) => {
    const {eggs} = props
    const listItems = eggs.map((value, index) => <EasterEgg key={index} name={value}/>)
    return <ul>{listItems}</ul>
}

export const EasterEgg = (props) => {
    const {name} = props
    return <li>{name}</li>;
}
