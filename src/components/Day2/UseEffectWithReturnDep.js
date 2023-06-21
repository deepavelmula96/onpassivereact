import React, { useEffect, useState } from 'react'

const UseEffectWithReturnDep = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('UseEffectWithReturnDep')
        return ()=>{
            console.log("UseEffectWithReturnDep_return")
        }

    }, [count])
    return (
        <div>UseEffectWithReturnDep
            count is {count}
            <button onClick={() => setCount(count + 10)}>count inc</button>
        </div>
    )
}

export default UseEffectWithReturnDep