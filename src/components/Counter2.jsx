import React, {useState} from 'react'

export default function Counter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const incre5 = () => {
        for(let i = 0; i < 5; i++)
            setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(prevCount => prevCount +1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount -1)} >Decre</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => incre5()}>5+</button>
            
        </div>
    )
}
