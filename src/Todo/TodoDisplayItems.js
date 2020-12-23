import React from 'react'

export default function TodoDisplayItems({ todo, index }) {
    return  (
        <li>
            <strong>{index +1}. </strong>
            {todo.title}
        </li>
        )
}