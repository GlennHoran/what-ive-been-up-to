import React from 'react'

import './css/tile.css'

export default function Tile (props) {
    return <div className="tile">
        <h1 className = "tile-title"> {props.title} </h1>
        {props.children}
        <div className = "tile-image">
            <img src = {props.src} alt = "an image"/>
        </div>

        <div className="tile-text">
            {props.text}
        </div>
    </div>

}