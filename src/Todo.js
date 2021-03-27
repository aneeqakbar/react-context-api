import React from 'react'

function Todo({todo,toggleTodo}) {
    const handleToggle = () => {
        toggleTodo(todo.id);
    }
    return (
        <p>
            <label>
            <input type='checkbox' checked={todo.isCompeleted} onChange={handleToggle} />
            {todo.name}
            </label>
        </p>
    )
}

export default Todo
