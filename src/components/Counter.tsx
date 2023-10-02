import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleCountClick = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button className={classes.button} onClick={handleCountClick}>Click</button>
        </div>
    )
}