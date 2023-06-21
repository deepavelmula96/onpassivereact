import React,{ useState } from 'react'

const HOCmain = (InputComponent, inputValue) => {
  const OutputComponent=(props)=>{
    const [count,setCount]=useState(0)
    const handler=()=>{
        setCount(count+inputValue)
    }
    return <InputComponent count={count} handler={handler} {...props}/>
  }
  return OutputComponent
}

export default HOCmain