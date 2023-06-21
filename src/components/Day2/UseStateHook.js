import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const UseStateHook = () => {
    const [name, setName]=useState("onpassive")
  return (
    <div>UseStateHook
        <br/>
        My company name is {name}
        <button onClick={()=>setName("onpassive_React")}>change 
        company Name</button>
        <br/>
        <ChildComponent name = {name} setName={setName}/>
    </div>
  )
}

export default UseStateHook