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

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEdit = (id: number, isDone: boolean) => {
        // setTodos(todos.filter(todo => todo.id !== id));
        if (!edit && !isDone)
            setedit(true);
    }
    const updateTodo = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id) ? { ...todo, todo: editvalue } : todo));
        setedit(false);
    }

    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        ref.current?.focus();
    }, [edit])

    return (
        <form className='single_todo' onSubmit={(e) => updateTodo(e, todo.id)}>

            {
                edit ? <input ref={ref} type="text" className='inputEdit--text' value={editvalue} onChange={e => setEditValue(e.target.value)} /> :
                    todo.isDone ? <s className='todo_singText'>{todo.todo}</s> :
                        <span className='todo_singText'>{todo.todo}</span>
            }



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