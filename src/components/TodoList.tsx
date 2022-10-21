import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {
                todos.map(item => (
                    <div key={item.id}>
                        <SingleTodo todo={item}  todos={todos} setTodos={setTodos} />
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList