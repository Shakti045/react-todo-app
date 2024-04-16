import React from 'react'
import SingleTodo from './SingleTodo'

const TodoList = ({todos}) => {
  return (
    <div className=' max-h-[50vh] w-full  overflow-y-scroll'>
        {
            todos.map((todo)=><SingleTodo key={todo.id} todo={todo} />)
        }
    </div>
  )
}

export default TodoList