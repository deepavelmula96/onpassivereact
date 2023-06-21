import React, { useState } from 'react'
import UseEffectWithEmpDep from './UseEffectWithEmpDep'
import UseEffectWithoutDep from './UseEffectWithoutDep'
import UseEffectWithReturnDep from './UseEffectWithReturnDep'
import UseEffectWithVarDep from './UseEffectWithVarDep'

const UseEffectHook = () => {
  const [Show, setShow] = useState(false)
  return (
    <div>UseEffectHook
      {/* <UseEffectWithoutDep/> */}
      {/* <UseEffectWithEmpDep/> */}
      {/* <UseEffectWithVarDep/> */}

      {Show ? <h1>hi all</h1> :
        <UseEffectWithReturnDep />

      }
      <button onClick={() => setShow(!Show)}>Hide</button>
    </div>
  )
}

export default UseEffectHook