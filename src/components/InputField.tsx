import { type } from 'os'
import React from 'react'
import "./styles.css"

type Props = { // It is for type of props 
    todo: string; 
    setTodo: React.Dispatch<React.SetStateAction<string>>; //If we hover on method in where we defiend this method,so we can find type of method
    handleAdd: (e: React.FormEvent) => void 
}

//Two ways of assining type or interface to props

// --> function name->> InputField: React.FC<Props>

// --> { todo, setTodo }:Props -->another way of assining type


const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => { //{ todo, setTodo }:Props -->another way of assining type
    return (
        <form className='input' onSubmit={(e) => handleAdd(e)}>
            <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter task' className='input_field' />
            <button type='submit' className="submit_btn">Go</button>
        </form>
    )
}

export default InputField