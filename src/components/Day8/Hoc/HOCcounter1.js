import React from 'react'
import HOCmain from './HOCmain'

const HOCcounter1 = (props) => {
  return (
    <div>HOCcounter1
        <ul>
            <li>name of counter {props.name}</li>
            <li>counter value {props.count}</li>
            <li><button onClick={props.handler}>inc</button></li>
        </ul>
    </div>
  )
}

export default HOCmain(HOCcounter1,5) 