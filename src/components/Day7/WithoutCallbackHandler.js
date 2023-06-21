import React, { memo } from 'react'

const WithoutCallbackHandler = () => {
    console.log("3.WithoutCallbackHandler")
  return (
    <div>3.WithoutCallbackHandler</div>
  )
}

export default memo(WithoutCallbackHandler)