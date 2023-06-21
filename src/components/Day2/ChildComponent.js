import React from 'react'

const ChildComponent = (props) => {

  return (
    <div>ChildComponent 
        my company name is {props.name}
        <br/>
        <button onClick={()=>props.setName("react_onpassive")}>child to parent</button>
    </div>
  )
}

export default ChildComponent