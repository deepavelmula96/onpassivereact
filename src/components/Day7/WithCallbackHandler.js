import React, { memo } from 'react'

const WithCallbackHandler = () => {
    console.log('4.WithCallbackHandler')
  return (
    <div>4.WithCallbackHandler</div>
  )
}

export default memo(WithCallbackHandler)