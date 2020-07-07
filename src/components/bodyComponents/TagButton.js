import React from 'react'
import Circle from './Circle'
import '../../css/tagButtons.css'

export default function TagButton(props) {
    return <div className="tag-button">
        <button className="tag-button-button">
            <Circle tag = {props.tag}/>
                {props.tag}
            </button>
    </div>
}