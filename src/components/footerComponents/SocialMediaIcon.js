import React from "react";
import MediumIcon from '../../resources/images/svgs/Medium'
import TwitterIcon from '../../resources/images/svgs/Twitter'
import LinkedInIcon from '../../resources/images/svgs/LinkedIn'
import GithubIcon from '../../resources/images/svgs/Github'



export default props => {
    const {link, name, fill} = props;
    return <div className="social-media-icon">
        <a href = {link} >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill = {fill}>
                {iconPicker(name)}
            </svg>
        </a>
    </div>
}

function iconPicker(name) {
    switch(name.toLowerCase()) {
        case "medium":
            return MediumIcon()
        case "twitter":
            return TwitterIcon()
        case "linkedin":
            return LinkedInIcon()
        case "github":
            return GithubIcon()
    }
}
