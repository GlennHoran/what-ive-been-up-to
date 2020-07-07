import React from "react";
import './css/header.css'
import NavLinkContainer from "./HeaderComponents/NavLinkContainer";
import SocialMediaLinkContainer from "./HeaderComponents/SocialMediaLinkContainer";
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
