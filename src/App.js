import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import Todolist from './component/Todolist';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <div className="app-container">
      <div className='app-wrapper'>
        <Header />
        <div>
          <Form 
          input = {input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}/>
        </div>
        
       <div>
        <Todolist 
          todos={todos}
          setTodos={setTodos}/>
       </div>
      </div>
     
    </div>
  );
}

export default App;
