import { type } from 'os'
import React from 'react'
import "./styles.css"

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => { //{ todo, setTodo }:Props -->another way of assining type
    return (
        <form className='input' onSubmit={(e) => handleAdd(e)}>
            <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter task' className='input_field' />
            <button type='submit' className="submit_btn">Go</button>
        </form>
    )
}

export default InputField