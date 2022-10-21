import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setedit] = useState<boolean>(false);
    const [editvalue, setEditValue] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ))
    }

    /*
      --> The above funtion for handing the done of todo.
      --> after clicking done button it updates isDone key is to true and updates the todos[]

    */

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    /*
   --> The above funtion for handing deleting todo.
   --> after clicking delete button it removes todo and update the todos[]

   */

    const handleEdit = (id: number, isDone: boolean) => {
        // setTodos(todos.filter(todo => todo.id !== id));
        if (!edit && !isDone)
            setedit(true);
    }

    /*
    --> The above funtion for handing edit todo.
    --> after clicking edit button it open the input field with todo text
 
    */

    const updateTodo = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id) ? { ...todo, todo: editvalue } : todo));
        setedit(false);
    }

    /*
   --> The above funtion for handing ipdating todo item.
   --> after completions updating todo, if user press the enter buttun.
   --> updating todo based on id
   */

    const ref = useRef<HTMLInputElement>(null); // getting type of refernce form where we assign ref varible of tag
    useEffect(() => {
        ref.current?.focus(); // when ever the dependency array will change, focus the input field
    }, [edit])

    return (
        <form className='single_todo' onSubmit={(e) => updateTodo(e, todo.id)}>

            {
                edit ? <input ref={ref} type="text" className='inputEdit--text' value={editvalue} onChange={e => setEditValue(e.target.value)} /> :
                    todo.isDone ? <s className='todo_singText'>{todo.todo}</s> :
                        <span className='todo_singText'>{todo.todo}</span>
            }
            {/* based on condition opening input field */}
            <div className="icons">
                <span className="icon" onClick={() => handleEdit(todo.id, todo.isDone)}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo


// impoting icons from react-icons 