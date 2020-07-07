import React from "react";
import './css/header.css'
import NavLinkContainer from "./headerComponents/NavLinkContainer";
import SocialMediaLinkContainer from "./headerComponents/SocialMediaLinkContainer";
import pixel from "/src/resources/images/pixelAvatar.png"


export function Header(props) {
    return <div className="header-container">
        <div className= "header-nav">
            <NavLinkContainer/>
        </div>
        <div className="hero-title">
            <h1>
            What's Glenn been up to?
            </h1>
            <div className="title-image">
                <img src = {pixel} alt = "it's pixel me!"/>
            </div>
        </div>
    </div>;
}
