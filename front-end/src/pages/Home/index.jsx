import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return(
        <div className="connect">
            <div>Se connecter en tant que</div>
            <NavLink to="dashboard/12">User 12</NavLink>
            <NavLink to="dashboard/18">User 18</NavLink>
        </div>
    )
}

export default Home