import React from 'react'

export default function From(props) {
    return (
        <div>
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <input
                    onChange={(e) => props.handleChange(e)}
                    value={ props.inputValue }
                    />
            </form>
        </div>
    )
}