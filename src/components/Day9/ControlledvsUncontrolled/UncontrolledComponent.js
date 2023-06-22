import React, { useRef } from 'react'

const UncontrolledComponent = () => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input_Value:', inputRef);
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" ref={inputRef} />
    <button type="submit">Submit</button>
  </form>
  )
}

export default UncontrolledComponent



