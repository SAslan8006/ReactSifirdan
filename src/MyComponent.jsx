import React, { useContext } from 'react'
import { MyContext } from './context/MyContext';

export const MyComponent = () => {
    const { count, setCount } = useContext(MyContext);
    return (
        <div>  <p>Count değeri: {count}</p>
            <button onClick={() => setCount(count + 1)}>Artır</button></div>
    )
}
