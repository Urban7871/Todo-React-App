import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter'; 
import Todo from './Todo';

import './scss/TodoList.scss'

const TodoList = () => {

    const[todos, setTodos] = useState([
        {
            id: 1,
            text: 'hi',
            checked: false
        },
        {
            id:2,
            text: 'call mom',
            checked: true
        }
    ])
    const[selected, setSelected] = useState("all")

    const onSelect = (e) => {
        setSelected(e.target.value)

        console.log(selected)
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todos => todos.id !== id);

        setTodos(newTodos);
    };

    const deleteDone = () => {
        const newTodos = todos.filter(todo => todo.checked === false);

        setTodos(newTodos)
    }

    const onCheck = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id)
                return {
                   ...todo,
                   checked: !todo.checked
                };
            return todo;
        })
        );
        console.log(todos)
        };

    return(
            <div>
                <div className='headerWrapper'>
                <TodoForm setTodos={setTodos} todos={todos}/>
                <TodoFilter onSelect={onSelect} />
                </div>
                <Todo todos={todos} onCheck={onCheck} deleteTodo={deleteTodo} selected={selected}/>
                <div className='deleteWrapper'>
                <button onClick={deleteDone}>Delete Done</button>
                </div>
            </div>
        )
        
};

export default TodoList;