import React, { useRef, useState } from 'react';
import './RefPropertiesTag.css';
const RefPropertiesTag = () => {
    const changeRef=useRef(null)
    const [state,setState]=useState("active")
  return (
    <div>RefPropertiesTag
        <h4>Accesing the tag properties by ref</h4>
        <p ref={changeRef} className={state}>active</p>
        <button onClick={()=>{
            setState(state==="active"?"inactive":"active")

            changeRef.current.classList.toggle(state)
            changeRef.current.innerHTML="cool"
        }}>click to change paragraph</button>
    </div>
  )
}

export default RefPropertiesTag