import React from 'react'
import ContextChild from './ContextChild'

const ContextParent = () => {
  return (
    <div>ContextParent
        <ContextChild/>
    </div>
  )
}

export default ContextParent