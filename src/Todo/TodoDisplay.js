import React from 'react'
import TodoDisplayItems from './TodoDisplayItems'

function TodoDisplay(props) {
    return (
        <div className="todo_tasks">
            {props.todos.map((todo, index )=> {
                return (
                <TodoDisplayItems
                    todo={todo} 
                    key={todo.id}
                    index ={index}
                />
                )
            })}
        </div>
    )
}

export default TodoDisplay