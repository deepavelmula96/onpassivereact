import React, { useEffect, useState } from 'react'


const UseEffectWithVarDep = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
console.log('UseEffectWithVarDep')
    },[count])
  return (
    <div>UseEffectWithVarDep
        count is {count}
        <button onClick={()=>setCount(count+8)}>count inc</button>
    </div>
  )
}

export default UseEffectWithVarDep