import React from 'react'

import '../css/tile.css'

export default function Tile (props) {
    return <div className={props.featured? "feature-tile": "tile"}>
        <div className = "tile-image">
            <img src = {props.src} alt = {props.alt}/>
        </div>
        <div className = "tile-title">
            <h4> {props.title} </h4>
        </div>
        <div className="tile-text">
            <p>
                {props.subheading}
            </p>
        </div>
    </div>

}