import React, { useState } from "react";
const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + props.incrementBy);
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <p>You clicked{counter}times</p>
        </div>
    )
}

export default Counter;