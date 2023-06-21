import React, { createContext } from 'react'
import ContextParent from './ContextParent'


export const UserDetails = createContext("")
const ContextApi = () => {
    const details = {
        id: 12345,
        name: "react_onpassive"
    }
    return (
        <div>ContextApi
            <UserDetails.Provider value={details}>
                <ContextParent />
            </UserDetails.Provider>
        </div>
    )
}

export default ContextApi