import tags from '../../resources/tags'
import TagButton from './TagButton'
import React from 'react'
import '../../css/tagButtons.css'

export default function TagButtonContainer() {
    return <div className="tag-button-container">
        {tags.map(tag => {return <TagButton tag={tag.label}/>})}
    </div>
}