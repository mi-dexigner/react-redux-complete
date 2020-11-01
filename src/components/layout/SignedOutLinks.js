import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = ()=> {
    return (
       <>
       <ul className="right hide-on-med-and-down">
           <li><NavLink to="/signup">Signup</NavLink></li>
           <li><NavLink to="/signin">Login</NavLink></li>
       </ul>
       <ul id="nav-mobile" className="sidenav">
       <li><NavLink to="/signup">Signup</NavLink></li>
           <li><NavLink to="/signin">Login</NavLink></li>
     </ul>
     <a href="!#" data-target="nav-mobile" className="sidenav-trigger">
         <i className="material-icons">menu</i></a>
       </>
    )
}

export default SignedOutLinks;