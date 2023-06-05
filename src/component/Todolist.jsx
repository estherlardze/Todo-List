import React from 'react';
import '../App.css'

const Todolist = ({todos, setTodos}) => {
  return (
    <div>
      {todos.map((todo) =>{
        <li className='todo-item' key={todo.id}>
            <input type="text" value={todo.title} onChange={(e) => e.preventDefault()}/>
        </li>
      })}
    </div>
  )
}

export default Todolist
