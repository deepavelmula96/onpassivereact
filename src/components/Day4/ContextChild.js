import React from 'react'
import ContextGrandChild from './ContextGrandChild'

const ContextChild = () => {
  return (
    <div>ContextChild
        <ContextGrandChild/>
    </div>
  )
}

export default ContextChild