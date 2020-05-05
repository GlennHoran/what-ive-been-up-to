import React from "react";
import './css/header.css'
import NavLinkContainer from "./HeaderComponents/NavLinkContainer";
import SocialMediaLinkContainer from "./HeaderComponents/SocialMediaLinkContainer";


export function Header(props) {
    return <div className="header-container">
        <NavLinkContainer/>
        <SocialMediaLinkContainer/>
    </div>;
}
