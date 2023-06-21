import React, { useState } from 'react';

const HocAuthentificationChild = (InputComponent, inputValue) => {
    const OutputComponent=()=>{
        const [authorized, setAuthorized] = useState(true)
        const [data, setData] = useState({
            userName: "deepa",
            id: "12345"
        })
        console.log('deepa',authorized)
        return (
            <div>
                {authorized ? <InputComponent name={data} /> : <h3 style={{color:"red", fontSize:"15px"}}>Please Login</h3>}
            </div>
        )
    }
    return OutputComponent
}

export default HocAuthentificationChild;