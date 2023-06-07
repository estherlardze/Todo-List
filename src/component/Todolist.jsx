import React from 'react';
import '../App.css';
import { AiTwotoneDelete } from 'react-icons/ai';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Todolist = ({todos, setTodos}) => {

  const handleTodo =({id}) =>(
    setTodos(todos.filter((todo) => todo.id !== id))
)

   const handleComplete = (todo) =>{

     setTodos(todos.map((item) => {
        if(item.id === todo.id){
         return {...item, completed: !item.completed}
       }
       return item
        }))

    }

  return (
    <div>
      {todos.map((todo) =>(
        <li className='todo-item' key={todo.id}>
            <input type="text" 
             value={todo.title} 
             onChange={(e) => e.preventDefault()}
             className={`todo-input ${todo.completed ? "completed" : ""}`}/>

         <div>
          <IoMdCheckmarkCircleOutline className='mark-icon icon' onClick={() => handleComplete(todo)}/>
          <AiTwotoneDelete className='delete-icon icon' onClick={()=> handleTodo(todo)}/>
      </div>
      </li>
      ))}
     
    </div>
  )
}

export default Todolist
