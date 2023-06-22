import React, { useState } from 'react'

export const ControlledComponent = () => {
    const [name, setName]=useState("")
    console.log(name)
  return (
    <div>
        <input value={name} onChange={e=>setName(e.target.value)}/>
    </div>
  )
}

// export default ControlledComponent