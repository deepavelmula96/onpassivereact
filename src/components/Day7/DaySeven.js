import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ExampleComponent from './ExampleComponent'

const DaySeven = () => {
    return (
        <div>
            <p></p>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li><Link to="/dayseven/usememo_usecallback">UseMemo vs UseCallback</Link></li>
                    <li><Link to="/dayseven/useref">Ref</Link></li>
                </ul>
            </nav>
            {/* <ExampleComponent/> */}
            <Outlet />
        </div>
    )
}

export default DaySeven