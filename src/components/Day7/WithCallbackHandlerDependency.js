import React, { memo } from 'react'

const WithCallbackHandlerDependency = () => {
    console.log("5.WithCallbackHandlerDependency")
  return (
    <div>5.WithCallbackHandlerDependency</div>
  )
}

export default React.memo(WithCallbackHandlerDependency)