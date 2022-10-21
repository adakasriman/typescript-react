import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model'; //In this file, created a interface for todo


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); // assing string type to todo variable
  const [todos, setTodos] = useState<Todo[]>([]); // adding Todo interface wit array 
  const handleAdd = (e: React.FormEvent)/*React.FormEvent--> it is for form event type */ => {
    e.preventDefault(); 
    if (todo) {
      setTodos([...todos, { id: todos.length ? todos.length + 1 : 1, todo: todo, isDone: false }]); // adding with new id
      setTodo(""); //This method is to set todo empty, after adding todo into todos  
    }
  }

  // The above funtion is getting todo text from the inputField component using attributes


  return (
    <div className="App">
      <h3 className='heading'>Task</h3>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* The above commonent for add todo items */}
      <TodoList todos={todos} setTodos={setTodos} />
      {/* The above commonent for showing todo list */}
    </div>
  );
}

export default App;
