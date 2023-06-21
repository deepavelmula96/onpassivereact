import React, { useEffect, useState } from 'react'

const UseEffectWithoutDep = () => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log("UseEffectWithoutDep")
  })
  return (
    <div>UseEffectWithoutDep
      <br/>
      count is {count}
      <button onClick={()=>{setCount(count+1)}}>count inc</button>
    </div>
  )
}

export default UseEffectWithoutDep