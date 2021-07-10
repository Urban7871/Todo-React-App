import React, { useState } from 'react';

import Todo from './Todo';
import './scss/TodoFilter.scss'

const TodoFilter = ({ onSelect }) => {
    

    return(
    <div>
        <select onChange={onSelect} className='filter'>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not Done</option>
        </select>
    </div>)
};

export default TodoFilter