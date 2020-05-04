
import React from 'react'
import TodoListFooter from '../../molecules/TodoListFooter'
import AddTodo from '../../redux/containers/AddTodo'
import VisibleTodoList from '../../redux/containers/VisibleTodoList'

const TodoListScreen = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <TodoListFooter />
    </div>
)

export default TodoListScreen