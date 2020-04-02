import React from 'react'

export default function Task(props) {
    return (
        <div>
            <span
                style={{ textDecoration: props._listItem.done ? 'line-through' : 'none' }}
            >
                {props._listItem.value}
            </span>
            <div>
                <button
                    onClick={() => props.handleClick(props.index)}
                >
                    {props._listItem.done ? 'Undo' : 'Done'}
                </button>
            </div>
        </div>
    )
}