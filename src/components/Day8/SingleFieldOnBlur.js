import React, { useState } from 'react'

const SingleFieldOnBlur = () => {
    const [name,setName]=useState("")

    const [nameError,setNameError]=useState("")

    const handleBlur=e=>{
        if(name===""){
            setNameError("Please Enter the Name")
        }else if(name?.length<=2){
            setNameError("Please enter atleast 3 character")
        }else{
            setNameError("")
        }
    }

    const handleSubmit=e=>{
        e.preventDefault();
        // if(name===""){
        //     setNameError("enter required field")
        // }
        // nameError==="correct"&& console.log(name)
        if(nameError==""){
            setNameError("enter required field")
        }else if(name.length>=3){
            setNameError("")
        }
    }
  return (
    <div>SingleFieldOnBlur
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} onBlur={handleBlur}/> <br/>
            {nameError!=="" &&<span style={{ color: 'red' }}>{nameError}</span>}
            <button> submit</button>
        </form>
    </div>
  )
}

export default SingleFieldOnBlur