import React from "react";
import '../css/footer.css'
import SocialMediaIcon from './footerComponents/SocialMediaIcon'
import FooterQuote from './footerComponents/FooterQuote'

export function Footer(props) {
    return <div className = "footer-container">
        <div className = "social-media-link-container">
        <SocialMediaIcon
            name = "Twitter"
            link = "https://twitter.com/batglenn13"
            fill="#373F51" />
        <SocialMediaIcon
            name = "LinkedIn"
            link = "www.linkedin.com/in/glennhoran"
            fill="#373F51"/>
        <SocialMediaIcon
            name = "Github"
            link = "https://github.com/glennhoran"
            fill="#373F51"/>
        <SocialMediaIcon
            name = "Medium"
            link = "https://medium.com/@glennhoran88"
            fill="#373F51"/>
        </div>
        <div className="footer-quote-container">
        <FooterQuote/>
        </div>
    </div>
}
