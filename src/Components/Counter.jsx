import React, { useState } from 'react'

const Counter = () => {

    const [counter1,setCounter1] = useState(0);

    const Increment = () => {
        setCounter1((prev) => prev  + 1)
    }


  return (
    <div>
        <button onClick={Increment}>Increment</button>
        <h1>{counter1}</h1>
    </div>
  )
}

export default Counter