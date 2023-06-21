import React from 'react'
import HOCmain from './HOCmain'

const HOCcoutner2 = (props) => {
  return (
    <div>HOCcoutner2
        <ul>
            <li>location is {props.location}</li>
            <li>counter value {props.count}</li>
            <li><button onClick={props.handler}>inc</button></li>
        </ul>
    </div>
  )
}

export default  HOCmain(HOCcoutner2, 10) 