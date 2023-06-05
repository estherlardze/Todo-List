import React from 'react';
import '../App.css'

const Form = ({input, setInput, todos, setTodos}) => {

   const handleChange = (e) =>{
    setInput(e.target.value)
   }

   const handleSubmit = (e) =>{
    e.preventDefault()
    setTodos([...todos, {id:Math.random(), title: input, completed: false}])
    setInput("")
   }
    

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
       placeholder='Enter a todo...'
       className='user-input' 
       value={input}
       onChange={handleChange}
       required />
    
       <button type="submit" className='add-button'>Add</button>
    </form>
  )
}

export default Form
