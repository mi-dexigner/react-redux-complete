import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = ()=> {
    return (
       <ul className="right hide-on-med-and-down">
            <li><NavLink to='/create'>New Project</NavLink></li>
           <li><NavLink to="/">Log Out</NavLink></li>
           <li><NavLink to="/" className="btn btn-floating pink lighten-1">ME</NavLink></li>
       </ul>
    )
}

export default SignedInLinks;