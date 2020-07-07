import React from 'react'
import Circle from './Circle'

import '../css/tile.css'

export default function TagVisual (props) {

    return <div className="tag-visual">
        {props.tags.map( tag => {
            return <Circle tag = {tag}/>
        })}
    </div>
}
