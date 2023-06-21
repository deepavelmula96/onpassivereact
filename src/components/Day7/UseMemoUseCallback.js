import React, { memo, useCallback, useState } from 'react'
import WithCallbackHandler from './WithCallbackHandler'
import WithCallbackHandlerDependency from './WithCallbackHandlerDependency'
import WithMemoExport from './WithMemoExport'
import WithoutCallbackHandler from './WithoutCallbackHandler'
import WithoutMemoExport from './WithoutMemoExport'

const UseMemoUseCallback = () => {
  const [parentCount,setParentCount]=useState(0)
  const [count,setCount]=useState(8)

  const handleChange=()=>{
    setParentCount(parentCount+100)
  }

  const handleChangeWithCallback=useCallback((e)=>{
    
  },[])
  const handleChangeWithCallbackWithDependency=useCallback(()=>{

  },[parentCount])
  console.log("parent_Counter")
  return (
    <div>UseMemoUseCallback <br/>
    initial count {count}
    <button onClick={()=>setCount(count+22)} >inc initial count</button>
    <hr/>
    count {parentCount} &nbsp; &nbsp;
    {/* <button onClick={()=>setParentCount(parentCount+100)} >inc count</button> */}
    <button onClick={handleChange} >inc count</button>
      <WithoutMemoExport/>
      <WithMemoExport/>
      <WithoutCallbackHandler handleChange={handleChange}/>
      <WithCallbackHandler handleChangeWithCallback={handleChangeWithCallback}/>
      <WithCallbackHandlerDependency handleChangeWithCallbackWithDependency={handleChangeWithCallbackWithDependency}/>
    </div>
  )
}

export default memo(UseMemoUseCallback)