import React, { useEffect, useState } from 'react'

const UseEffectWithEmpDep = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
console.log('UseEffectWithEmpDep')
    },[])
  return (
    <div>UseEffectWithEmpDep
        count is {count}
        <button onClick={()=>setCount(count+2)}>count inc</button>
    </div>
  )
}

export default UseEffectWithEmpDep