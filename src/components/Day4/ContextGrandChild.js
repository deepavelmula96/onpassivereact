import React, { useContext } from 'react'
import { UserDetails } from './ContextApi'

const ContextGrandChild = () => {
    const detailsAvailable=useContext(UserDetails)
  return (
    <div>ContextGrandChild <br/>
    user id {detailsAvailable?.id} <br/>
    user name {detailsAvailable?.name}     </div>
  )
}

export default ContextGrandChild