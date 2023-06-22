import React from 'react'
import {ControlledComponent} from './ControlledComponent'
import UncontrolledComponent from './UncontrolledComponent'

const ControlledvsUncontrolled = () => {
  return (
    <div>ControlledvsUncontrolled
         <div>1. controlled component
            <ControlledComponent/>
        </div>
        <hr/>
        <div>
            2. uncontrolled Component
            <UncontrolledComponent/>
        </div>
    </div>
  )
}

export default ControlledvsUncontrolled