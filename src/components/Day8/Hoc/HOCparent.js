import React from 'react'
import HOCcounter1 from './HOCcounter1'
import HOCcoutner2 from './HOCcoutner2'

const HOCparent = () => {
  return (
    <div>HOCparent
        <HOCcounter1 name={"counter1 name sending"} />
        <HOCcoutner2 location={"hyderabad"}/>
    </div>
  )
}

export default HOCparent