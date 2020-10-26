import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = ()=> {
    return (
       <>
       <ul className="right hide-on-med-and-down">
           <li><NavLink to="/signup">Signup</NavLink></li>
           <li><NavLink to="/signin">Login</NavLink></li>
       </ul>
       <ul id="nav-mobile" class="sidenav">
       <li><NavLink to="/signup">Signup</NavLink></li>
           <li><NavLink to="/signin">Login</NavLink></li>
     </ul>
     <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
       </>
    )
}

export default SignedOutLinks;