import React from 'react'

import '../css/tile.css'

export default function Tile (props) {
    return <div className={props.title === "Floki"? "feature-tile": "tile"}>

    </div>
}