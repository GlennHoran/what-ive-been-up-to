import React from "react";
import Tags from "../../resources/tags";

export default props => {
    const {tag} = props;
    return <div>

        <svg height="20" width="20">
            <circle cx="10" cy="10" r="8" fill={setColourTagColour(props.tag)}>
                <title>
                    {tag}
                </title>
            </circle>
        </svg>
    </div>
}


function setColourTagColour(tag){return Tags.filter( it => {return (it.label === tag)}).length>0 ? Tags.filter( it => {return (it.label === tag)})[0].colour : "#255D83"}

