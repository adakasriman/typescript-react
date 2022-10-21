import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[]; // todos -->Todo is type for todo and [] for storing multiple todo's 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;  //If we hover on method in where we defiend this method,so we can find type of methodF
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {
                todos.map(item => (
                    <div key={item.id}>
                        <SingleTodo todo={item} todos={todos} setTodos={setTodos} />
                        {/* calling each todo and passing todo ,todos and setTodos */}
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList