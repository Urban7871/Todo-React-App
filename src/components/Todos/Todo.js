import { render } from '@testing-library/react';
import React from 'react';

import './scss/Todo.scss'
import { AiFillDelete } from 'react-icons/ai'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            props: this.props,
        }
    }

    renderList() {
        if(this.props.selected === "all"){
            return(
                this.props.todos.map(todo => {
                    if(todo.checked === true){
                        return(
                        <div key={todo.id} className='checked todoDiv'>
                            <p>{todo.text}</p>
                            <input type="checkbox" defaultChecked={todo.checked}
                            onClick={() => this.props.onCheck(todo.id)} />
                            <AiFillDelete className='icon' onClick={() => this.props.deleteTodo(todo.id)} />
                        </div>
                        )

                    } else {
                        return(
                            <div key={todo.id} className='unChecked todoDiv'>
                            <p>{todo.text}</p>
                    <input type="checkbox" defaultChecked={todo.checked}
                    onClick={() => this.props.onCheck(todo.id)} />
                    <AiFillDelete onClick={() => this.props.deleteTodo(todo.id)} />
                </div>
            )
        }
        })  
        )
    } else if(this.props.selected === "done") {
           const done = this.props.todos.filter(todo => todo.checked === true);
           return(
               done.map(todo => {
                   return(
                    <div key={todo.id} className='checked todoDiv'>
                    <p>{todo.text}</p>
                    <input type="checkbox" defaultChecked={todo.checked}
                    onClick={() => this.props.onCheck(todo.id)} />
                    <AiFillDelete className='icon' onClick={() => this.props.deleteTodo(todo.id)} />
                </div>
                   )
               })
           )
    } else {
        const notDone = this.props.todos.filter(todo => todo.checked === false);
        return(
            notDone.map(todo => {
                return(
                    <div key={todo.id} className='unChecked todoDiv'>
                            <p>{todo.text}</p>
                    <input type="checkbox" defaultChecked={todo.checked}
                    onClick={() => this.props.onCheck(todo.id)} />
                    <AiFillDelete onClick={() => this.props.deleteTodo(todo.id)} />
                </div>
                )
            })
        )

    }
}
    
    render(){
        return(
        <div>
            {this.renderList()}
        </div>
    )
}
}

export default Todo;