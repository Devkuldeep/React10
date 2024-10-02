import React from 'react'
import { useState } from 'react'

function Numclick() {
    const [count, setCount] = useState(0)
  return <>
   <div className='container'>
        <h1 onClick={()=> setCount((count)=> count = count+1) }> Number of clicks {count}</h1>
     </div>
  </>
}

export default Numclick;