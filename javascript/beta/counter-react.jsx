/*
 https://www.codewars.com/kata/5f266f1f0dc7f30033d7b01d/train/javascript
*/

import React, {useState, useEffect} from "react"

const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'gray', 'white', 'black', 'almond', 'brown']

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 10)
    return colors[randomIndex]
}

export default function Counter() {
    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState('null')

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }

    useEffect(() => {
        setColor(getRandomColor())
    }, [counter])

    return (
        <div style={{borderTop: `10px solid ${color}`}}>
            <div className="value">{counter}</div>
            <button className="increment" onClick={increment}>
                -
            </button>
            <button className="decrement" onClick={decrement}>
                +
            </button>
            <button className="reset" onClick={reset}>
                reset
            </button>
        </div>
    )
}
