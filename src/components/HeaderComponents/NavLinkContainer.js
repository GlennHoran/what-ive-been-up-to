import React from 'react'
import NavLink from "./NavLink";

export default function NavLinkContainer (props) {
    return <div className = "nav-link-container">
        <NavLink title = "About"/>
        <NavLink title = "another title"/>

    </div>
}