import React from 'react'

import Task from './Task'

export default function List(props) {
    return(
        <div>
            {props.listItem.map((todo, i) => {
                return(
                    <Task 
                        key={i}
                        index={i}
                        _listItem={todo}
                        handleClick={props.handleClick}
                    />
                )
            })}
        </div>
    )
}