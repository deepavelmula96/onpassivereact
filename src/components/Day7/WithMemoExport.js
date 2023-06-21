import React, { memo } from 'react'

const WithMemoExport = () => {
    console.log("2.WithMemoExport")
  return (
    <div>2.WithMemoExport</div>
  )
}

export default memo(WithMemoExport) 