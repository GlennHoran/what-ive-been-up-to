import React from 'react'
import SocialMediaLink from "./SocialMediaLink";

export default function SocialMediaLinkContainer(props) {
    return <div className = "social-media-link-container">
        <SocialMediaLink name = "FaceBook"/>
        <SocialMediaLink name = "Twitter"/>
        <SocialMediaLink name = "Github"/>
    </div>
}