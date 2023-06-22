import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTopic = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const response = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos").then(response => response?.data).catch(err => console.log(err))
            setData(response)
          }
          response()
    },[])
  return (
    <div>AxiosTopic <br/>
    {data?.map((item,index)=>{
      console.log("item",item)
       return (
        <li key={item?.id}>{item?.title}</li>
       )
    })}

    </div>
  )
}

export default AxiosTopic