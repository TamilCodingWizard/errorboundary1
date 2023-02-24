import React, { useState } from 'react'

const Home = () => {

    const [count, setCount] = useState(0)
        if (count === 3) {
            throw new Error('Danger zone!')
        }
    
    
    
  return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Home
