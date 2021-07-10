import React, { useState } from 'react';

import './scss/TodoForm.scss'


const TodoForm = ({ todos, setTodos, deleteDone }) => {
    const[input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setTodos([...todos, {id: Math.floor(Math.random() * 10000), text: input, checked: false}])
        setInput('')
    }


    return(
        <div className='inputWrapper'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={onChange} value={input} className='textInput'/>
                <button>Add Todo</button>
            </form>
        </div>
    )
};

export default TodoForm;