import React from 'react'
import PropTypes from 'prop-types'
import TodoLi from '../../atoms/TodoLi'

const TodoListList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            <TodoLi key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)

TodoListList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoListList